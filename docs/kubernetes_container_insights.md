# Kubernetes Costs via a Container Insights Cross Account Integration

Vantage follows the official [AWS documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-common-scenarios.html#CloudWatch-Agent-send-to-different-AWS-account) on securely sending CloudWatch logs to another AWS account to ingest Kubernetes costs through Container Insights. The steps below are for users who choose to use Container Insights, instead of the recommended [OpenCost](/opencost) integration.

## Deploy Cloudwatch Agent with Cross Account ARN
The Cloudwatch agent [must be setup](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html) to collect metrics from your clusters. You will have to make one change on step 3 of the [AWS Container Insights setup instructions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html) and modify the `cwagent-configmap.yml`  to include the `role_arn`. Vantage will have provisioned this role for you already, see [below](#provision-a-cross-account-role).

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
          "role_arn": "arn:aws:iam::<VANTAGE_ACCOUNT>:role/containerinsights-<CUSTOMER_NAME>"
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

## Adding Permissions for Node Roles

After this is done you will have to modify the IAM permissions of the Node Role that is used for your EKS Cluster roles. They will require two changes:

1. An inline policy that allows the role to assumeRole the IAM Role on the Vantage side.
2. Attachment of an AWS managed policy called `CloudWatchAgentServerPolicy` which allows the Node to send cloudwatch metrics.

Each Node will have to assume the role above to write logs to your Vantage account. That means that each [node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in your AWS account will need to attach the inline policy below. 

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::<VANTAGE_ACCOUNT>:role/containerinsights-<CUSTOMER_NAME>"
    }
  ]
}
```

**Note:** If using self-managed nodes on EKS you will have to find out the node roles you have assigned within the cluster yourself.

Now, attach the `CloudWatchAgentServerPolicy` policy to each node role.

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