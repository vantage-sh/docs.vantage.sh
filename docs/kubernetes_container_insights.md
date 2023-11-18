---
id: kubernetes_container_insights
title: Kubernetes (Container Insights)
description: This page walks through how to integrate your Kubernetes costs via Container Insights in Vantage.
keywords:
  - Kubernetes
  - Container Insights
---

# Kubernetes (Container Insights)

Vantage follows the official [AWS documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-common-scenarios.html#CloudWatch-Agent-send-to-different-AWS-account) on securely sending CloudWatch logs to another AWS account to ingest Kubernetes costs through Container Insights.

:::note
The steps below are for users who choose to use Container Insights instead of the recommended [Vantage Kubernetes Agent](/kubernetes_agent) integration.
:::

## Deploy CloudWatch Agent with Cross-Account ARN

The CloudWatch agent must be set up to collect metrics from your clusters. 

Refer to the [AWS Container Insights setup instructions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html). You will have to make one change on step 3 of these instructions and modify the `cwagent-configmap.yml` to include the `role_arn`. Vantage will have provisioned this role for you already. See the steps below, in the [Provision a Cross-Account Role](#provision-a-cross-account-role) section.

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

Next, you will have to modify the IAM permissions of the Node Role that is used for your EKS Cluster roles. They step will require two changes:

- An inline policy that allows the role to `assumeRole` the IAM role on the Vantage side.
- Attachment of an AWS Managed Policy called `CloudWatchAgentServerPolicy`, which allows the node to send CloudWatch metrics.

Each node will have to assume the role above to write logs to your Vantage account. That means that each [node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in your AWS account will need to attach the inline policy below.

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

:::note
If you use self-managed nodes on EKS, you will have to find out the node roles you have assigned within the cluster yourself.
:::

Now, attach the `CloudWatchAgentServerPolicy` policy to each node role.

## Provision a Cross-Account Role {#provision-a-cross-account-role}

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
