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
kubectl apply -f skillsui.yaml
```

Expose using a Service:

```
kubectl expose deployment skillsui --type=LoadBalancer --port=8080
```

Forward the port to Service

![port-forward](_images/port-forward.png)

> Note: Can also be done using: `kubectl port-forward pods/skillsui-5656cfd5b8-gc2m9 8060:80 -n default`

Cleanup:

```
kubectl delete service skillsui
kubectl delete deployment skillsui
```
