# Getting Started

To get started using Vantage to explore your cloud infrastructure costs, you'll want to create a data integration between at least one of your providers and Vantage.

## Getting Started with Amazon Web Services (AWS)
Vantage integrates with AWS via a [cross-account IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html). This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their AWS spend.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting an AWS account](https://console.vantage.sh/setup). The onboarding flow will guide you through connecting your AWS account to Vantage. Full documentation on connecting an AWS account, can be found [here](/connecting_aws/).

## Getting Started with Google Cloud Platform (GCP)
Vantage integrates with GCP via a [service account](https://cloud.google.com/iam/docs/service-accounts). This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their GCP spend.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting a GCP billing account](https://console.vantage.sh/setup). The onboarding flow will guide you through connecting your AWS account to Vantage. Full documentation on connecting a GCP billing account, can be found [here](/connecting_gcp/).

## Getting Started with Kubernetes
Vantage currently only support Kubernetes as a provider for cloud managed Kubernetes deployments (e.g. Amazon Elastic Kubernetes Service). Vantage integrates with Kubernetes via IAM permissions to read from the metrics store of a Kubernetes cluster. Once cluster metrics are being stored and the Vantage IAM role has permissions to access the metrics, Vantage will begin syncing an organization's usage metrics and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their Kubernetes spend.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting a cloud provider account](https://console.vantage.sh/setup). The onboarding flow will guide you through creating the data integration to your cloud provider. Full documentation on getting started with Kubernetes, can be found [here](/connecting_kubernetes/).


## Other Providers
Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to support@vantage.sh. 
