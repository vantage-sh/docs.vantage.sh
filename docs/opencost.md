[OpenCost](https://www.opencost.io) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.

OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage.

## Installing OpenCost

OpenCost can be installed by following [this](https://www.opencost.io/docs/install)) quickstart guide. Ensure you set the [cluster_id](https://github.com/opencost/opencost/blob/develop/kubernetes/opencost.yaml#L157) value when deploying so that Vantage can properly assign costs to a specific cluster.

### Configuring Prometheus

To push OpenCost metrics to Vantage, follow the [instructions](https://www.opencost.io/docs/install) to enable [Prometheus](https://prometheus.io/docs/introduction/overview/) to scrape the `/metrics` endpoint.

Contact [support@vantage.sh](mailto:support@vantage.sh) to have a prometheus endpoint provisioned. Once provisioned you will receive the necessary url and credentials for the prometheus remote_write config. From there Vantage will begin ingesting these costs and they will be available in Cost Reports.
