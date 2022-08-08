# K8S Container Insights - Cross Account

## Provision a Cross Account Role

Vantage will provision an IAM role internally with the following trust policy and attach the `CloudWatchAgentServerPolicy` managed policy.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<CUSTOMER_AWS_ACCOUNT_ID>:root"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

## Adding Permissions for Node Roles

Each Node will have to assume the role above to write logs to your Vantage account. That means that each [node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in your AWS account will need to attach the inline policy below. Note that the `CloudWatchAgentServerPolicy` above must also be attached to each node role.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::<VANTAGE_PROVIDED>:role/containerinsights-<CUSTOMER_NAME>"
    }
  ]
}
```

**Note:** If using self-managed nodes on EKS you will have to find out the node roles you have assigned within the cluster yourself.

## Deploy Cloudwatch Agent with Cross Account ARN

The customer should follow these steps - [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html).

On Step #3 they will have to modify the **cwagent-configmap.yml** to include the `role_arn`.

**cwagent-configmap.yml:**

```yaml
# create configmap for cwagent config
apiVersion: v1
data:
  # Configuration is in Json format. No matter what configure change you make,
  # please keep the Json blob valid.
  cwagentconfig.json: |
    {
      "agent": {
        "credentials": {
          "role_arn": "arn:aws:iam::<VANTAGE_PROVIDED>:role/containerinsights-<CUSTOMER_NAME>"
        }
      },
      "logs": {
        "metrics_collected": {
          "kubernetes": {
            "metrics_collection_interval": 60
          }
        },
        "force_flush_interval": 5
      }
    }
kind: ConfigMap
metadata:
  name: cwagentconfig
  namespace: amazon-cloudwatch
```

## Overview of Steps

Instructions for installing the Cloudwatch [here](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html).

You will have to make one change on step 3 and modify the cwagent-configmap.yml.

After this is done you will have to modify the IAM permissions of the Node Role that is used for your EKS Cluster roles. They will require two changes:

1. An inline policy that allows the role to assumeRole the IAM Role on the Vantage side - this is attached.
2. Attachment of an AWS managed policy called CloudWatchAgentServerPolicy which allows the Node to send cloudwatch metrics.

You can read more about these policy changes [here](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-common-scenarios.html#CloudWatch-Agent-send-to-different-AWS-account).
