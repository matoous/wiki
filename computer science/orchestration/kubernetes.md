# Kubernetes

## Glossary

### **Pod**

The smallest and simplest Kubernetes object. A Pod represents a set of running containers on your cluster.

A Pod is typically set up to run a single primary container. It can also run optional sidecar containers that add supplementary features like logging. Pods are commonly managed by a Deployment.

### **Node**

A node is a worker machine in Kubernetes.

A worker node may be a VM or physical machine, depending on the cluster. It has local daemons or services necessary to run Pods and is managed by the control plane. The daemons on a node include [kubelet](https://kubernetes.io/docs/reference/generated/kubelet), [kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/), and a container runtime implementing the [CRI](https://kubernetes.io/docs/concepts/overview/components/#container-runtime) such as [Docker](https://docs.docker.com/engine/).

## Context and configuration

Show all configuration, merged: `kubectl config view`

Show all available contexts: `kubectl config get-contexts`

Current context: `kubectl config current-context`

Change context: `kubectl config set-context`  

## Apply

Applying `json` or `yaml` manifests:

```jsx
kubectl apply -f manifest.yaml
kubectl apply -f manifest1.yaml -f manigest2.yaml
kubectl apply -f many-manyfests/
```

## Viewing and finding resources

```jsx
kubectl get services
kubectl get pods
kubectl get deployments
```

## Deployment strategies

![Kubernetes%2094f0bd3f403f46f4a1bdf86307559efa/Untitled.png](Kubernetes%2094f0bd3f403f46f4a1bdf86307559efa/Untitled.png)

[https://github.com/ContainerSolutions/k8s-deployment-strategies](https://github.com/ContainerSolutions/k8s-deployment-strategies)

---

## Resources

- [Official Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Glossary](https://kubernetes.io/docs/reference/glossary/?fundamental=true)
- [Deployment Strategies](https://github.com/ContainerSolutions/k8s-deployment-strategies)
- [Minimum Viable Kubernetes](https://eevans.co/blog/minimum-viable-kubernetes/)
- [Anatomy of my Kubernetes Cluster](https://ttt.io/anatomy-of-my-kubernetes-cluster)

