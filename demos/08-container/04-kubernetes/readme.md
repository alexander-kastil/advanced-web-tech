# Kubernetes

[Kubernetes Base Terms](https://docs.bytemark.co.uk/article/kubernetes-terminology-glossary/)

[Kubectl Commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)

Enable Kubernetes in Docker Desktop:

- Go to Docker Desktop Settings
- Check Enable Kubernetes -> Press Yes to install if asked

![Kubernetes](_images/kubernetes.png)

### Getting Started

Create a Deployment:

```
kubectl apply -f config-api.yaml
```

Expose using a Service:

```
kubectl expose deployment config-api --type=LoadBalancer --port=8080
```

Forward the port to Service

![port-forward](_images/port-forward.png)

> Note: Can also be done using: `kubectl port-forward pods/config-api-5656cfd5b8-gc2m9 8060:80 -n default`

List deployments:

```
kubectl get deployments
```

List services:

```
kubectl get services
```

Cleanup:

```
kubectl delete service configapi-load-balancer
kubectl delete deployment configapi
```
