[OpenCost](https://www.cncf.io/projects/opencost/) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Vantage can injest costs in OpenCost format and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and onprem, are supported by Vantage.

OpenCost is the recommened way to integrate Kubernetest cost reporting into Vantage.

## Installing OpenCost
OpenCost is available as a [Helm chart](https://www.opencost.io/docs/install). It can also be deployed statically or built from source.

## Configuring Prometheus
To push OpenCost metrics to Vantage, follow the [instructions](https://www.opencost.io/docs/install) to enable [Prometheus](https://prometheus.io/docs/introduction/overview/) to scrape the `/metrics` endpoint.

Lastly, configure a [remote_write](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) endpoint in Prometheus to push OpenCost metrics to Vantage.



