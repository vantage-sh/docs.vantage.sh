# Setup

Vantage is able to allocate Kubernetes cluster costs by service, namespace or label. This gives organizations insight into how resources within a cluster are contributing to the overall infrastructure bill. Vantage is able allocate costs correctly by ingesting utilization metrics gathered from an organization's metrics store.

## Creating a Kubernetes Integration

To create a Kubernetes integration, go to the [Integrations page](https://console.vantage.sh/settings/integrations) in the Vantage console. Vantage will have automatically detected if there are any Kubernetes clusters in your cloud provider that are supported. You can enable support by clicking the "Enable" on the cluster that you'd like to start tracking.


## Read Only by Default
The Kubernetes integration is read-only by default. It does not have permissions nor will ever attempt to make any changes to your infrastructure. 