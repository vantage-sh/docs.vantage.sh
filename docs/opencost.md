[OpenCost](https://www.cncf.io/projects/opencost/) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.

OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage.

## Installing OpenCost

OpenCost is available as a [Helm chart](https://www.opencost.io/docs/install). It can also be deployed statically or built from source. Ensure you set the [cluster_id](https://github.com/kubecost/cost-analyzer-helm-chart/blob/develop/cost-analyzer/values.yaml#L448) value when deploying so that Vantage can properly assign costs to a specific cluster.

### Configuring Prometheus

To push OpenCost metrics to Vantage, follow the [instructions](https://www.opencost.io/docs/install) to enable [Prometheus](https://prometheus.io/docs/introduction/overview/) to scrape the `/metrics` endpoint.

Contact [support@vantage.sh](mailto:support@vantage.sh) to have a prometheus endpoint provisioned. Once provisioned you will receive the necessary url and credentials for the prometheus remote_write config. From there Vantage will begin ingesting these costs and they will be available in Cost Reports.

#### Example Terraform Snippet

```
resource "helm_release" "kubecost" {
  name       = "kubecost"
  repository = "https://kubecost.github.io/cost-analyzer/"
  chart      = "cost-analyzer"
  set {
    name     = "kubecostToken"
    value    = "aGVsbUBrdWJlY29zdC5jb20=xm343yadf98" # default non-sensitive kubecost token
  }
  set {
    name     = "prometheus.nodeExporter.enabled"
    value    = "false"
  }
  set {
    name     = "prometheus.server.global.external_labels.cluster_id"
    value    = "kubernetes_cluster_name" # Set name of kubernetes cluster for remote_write metrics
  }
  values = [<<EOF
prometheus:
  serverFiles:
    prometheus.yml: 
      remote_write:
        - url: "https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-xxxxxxxxxxxxxxxxxxxx/api/v1/remote_write"
          sigv4:
            region: us-east-1
            access_key: AKIAXXXXXXXXXXXXXX
            secret_key: XXXXXXXXXXXXXXXXX
EOF
  ]
}
```
