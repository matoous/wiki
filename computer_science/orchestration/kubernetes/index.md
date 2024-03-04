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
kubectl apply -f manifest.yaml -f another.yaml -f whole-directory/
```

## Viewing and finding resources

```jsx
kubectl get [pods/services/ingress/deployments/...] [-n namespace/--all-namespaces]
```

## Deployment strategies

![kubernetes deployment strategies](deployment_strategies.png)

- [https://github.com/ContainerSolutions/k8s-deployment-strategies](https://github.com/ContainerSolutions/k8s-deployment-strategies)

## Tutorials

## Tools around k8s

- [Kubeval](https://github.com/garethr/kubeval) - Validate your Kubernetes configuration files, supports multiple Kubernetes versions.
- [Helm](https://helm.sh/) - Kubernetes package manager.
- [kaniko](https://github.com/GoogleContainerTools/kaniko) - Build Container Images In Kubernetes.
- [Portainer](https://portainer.io) - Lighter than Rancher (for Docker).
- [Kubespray](https://github.com/kubernetes-incubator/kubespray) - Deploy a Production Ready Kubernetes Cluster.
- [Kubespy](https://github.com/pulumi/kubespy) - Tools for observing Kubernetes resources in real time, powered by Pulumi.
- [Kubeapps](https://github.com/kubeapps/kubeapps) - Web-based UI for deploying and managing applications in Kubernetes clusters.
- [Kazan](https://github.com/obmarg/kazan) - Kubernetes API client for Elixir.
- [Tilt](https://github.com/windmilleng/tilt) - Local Kubernetes development with no stress.
- [Maestro](https://github.com/maestrosdk/maestro) - Provides a declarative approach to building production-grade Kubernetes Operators covering the entire application lifecycle.
- [kubefwd](https://github.com/txn2/kubefwd) - Bulk port forwarding Kubernetes services for local development.
- [Argo](https://github.com/argoproj/argo) - Container-native workflows for Kubernetes. ([Getting started](https://iamstoxe.com/posts/argo-getting-started/)) ([Templating](https://iamstoxe.com/posts/templating-with-argo/)) ([Argo Server](https://iamstoxe.com/posts/argo-server/))
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker - local clusters for testing Kubernetes.
- [Garden](https://github.com/garden-io/garden) - Development engine for Kubernetes, containers and serverless functions.
- [PowerfulSeal](https://github.com/bloomberg/powerfulseal) - Adds chaos to your Kubernetes clusters, so that you can detect problems in your systems as early as possible.
- [k8dash](https://github.com/indeedeng/k8dash) - Simple Kubernetes real time dashboard and management.
- [Draft](https://github.com/azure/draft) - Streamlined Kubernetes Development.
- [k3s](https://github.com/ibuildthecloud/k3s) - Lightweight Kubernetes. Easy to install, half the memory, all in a binary less than 40mb.

### CLI Tools

- [k9s](https://github.com/derailed/k9s) - Provides a curses based terminal UI to interact with your Kubernetes clusters.
- [kubectx + kubens: Power tools for kubectl](https://github.com/ahmetb/kubectx)
- [kail](https://github.com/boz/kail) - Kubernetes log viewer.

## Resources

- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Official Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Glossary](https://kubernetes.io/docs/reference/glossary/?fundamental=true)
- [Minimum Viable Kubernetes](https://eevans.co/blog/minimum-viable-kubernetes/)
- [Anatomy of my Kubernetes Cluster](https://ttt.io/anatomy-of-my-kubernetes-cluster)
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) - Bootstrap Kubernetes the hard way on Google Cloud Platform. No scripts.
- [What happens when I type kubectl run](https://github.com/jamiehannaford/what-happens-when-k8s) ([HN](https://news.ycombinator.com/item?id=22785652))
- [Kubernetes Security - Best Practice Guide](https://github.com/freach/kubernetes-security-best-practice)
- [Knative Serving](https://github.com/knative/serving) - Kubernetes-based, scale-to-zero, request-driven compute.
- [Rancher Kubernetes](https://rancher.com/kubernetes/) - Complete container management platform. Makes it easy to run Kubernetes everywhere. ([Code](https://github.com/rancher/rancher))
- [node-problem-detector](https://github.com/kubernetes/node-problem-detector) - Aims to make various node problems visible to the upstream layers in cluster management stack.
- [Kubernetes for Sysadmins – Kelsey Hightower (2016)](https://www.youtube.com/watch?v=HlAXp0-M6SY)
- [Kubernetes API conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/api-conventions.md)
- [Kubernetes for personal projects? No thanks! (2018)](http://carlosrdrz.es/kubernetes-for-small-projects/)
- [Terraform Kubernetes provider](https://github.com/terraform-providers/terraform-provider-kubernetes)
- [You might not need Kubernetes (2018)](https://blog.jessfraz.com/post/you-might-not-need-k8s/) - [HN](https://news.ycombinator.com/item?id=18495697)
- [Kubernetes clusters for the hobbyist](https://github.com/hobby-kube/guide)
- [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) - Open source Kubernetes kubelet implementation.
- [Compose on Kubernetes](https://github.com/docker/compose-on-kubernetes) - Deploy applications described in Compose onto Kubernetes clusters.
- [Kubernetes Failure Stories](https://k8s.af/) - Compiled list of links to public failure stories related to Kubernetes. ([Code](https://github.com/hjacobs/kubernetes-failure-stories)) ([HN](https://news.ycombinator.com/item?id=26106080))
- [Kubinception: using Kubernetes to run Kubernetes (2019)](https://www.ovh.com/fr/blog/kubinception-using-kubernetes-to-run-kubernetes/)
- [Kubernetes Authentication Example](https://github.com/pusher/k8s-auth-example) - Code is provided verbatim as an example of how to connect to an OIDC provider and authenticate users before configuring their kubeconfig.
- [Goldpinger](https://github.com/bloomberg/goldpinger) - Debugging tool for Kubernetes which tests and displays connectivity between nodes in the cluster.
- [Kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) - SDK for building Kubernetes APIs using CRDs.
- [Knative build](https://github.com/knative/build) - Kubernetes-native Build resource.
- [Kubernetes as an API standard (2019)](https://www.cloudatomiclab.com/rustyk8s/)
- [Cerebral](https://github.com/containership/cerebral) - Kubernetes cluster autoscaler with pluggable metrics backends and scaling engines.
- [Skaffold](https://github.com/GoogleContainerTools/skaffold) - Easy and Repeatable Kubernetes Development.
- [Talos](https://github.com/autonomy/talos) - Modern Linux distribution for Kubernetes.
- [Kubernetes cleanup operator](https://github.com/lwolf/kube-cleanup-operator) - Kubernetes Operator to automatically delete completed Jobs and their Pods.
- [Click](https://github.com/databricks/click) - Command Line Interactive Controller for Kubernetes. Its purpose is to manage a large number of Kubernetes clusters/objects quickly and efficiently.
- [Kubectl Dashboard](https://github.com/bouk/kubectl-dashboard) - Sub-command for kubectl that will instantly make a Kubernetes dashboard available for you, without having to run anything in your cluster.
- [kustomize](https://github.com/kubernetes-sigs/kustomize) - Customization of kubernetes YAML configurations.
- [Kubewebhook](https://github.com/slok/kubewebhook) - Small Go framework to create external admission webhooks for Kubernetes.
- [Submariner](https://github.com/rancher/submariner) - Connect all your Kubernetes clusters, no matter where they are in the world.
- [Tekton Pipelines](https://github.com/tektoncd/pipeline) - Provides k8s-style resources for declaring CI/CD-style pipelines.
- [ko](https://github.com/google/ko) - Tool for building and deploying Golang applications to Kubernetes.
- [Maybe You Don't Need Kubernetes (2019)](https://endler.dev/2019/maybe-you-dont-need-kubernetes/) ([HN](https://news.ycombinator.com/item?id=22034291))
- [CLI for Amazon EKS](https://github.com/weaveworks/eksctl) - Simple CLI tool for creating clusters on EKS - Amazon's new managed Kubernetes service for EC2.
- [Kubernetes controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) - Set of go libraries for building Controllers.
- [Popeye](https://github.com/derailed/popeye) - Kubernetes cluster resource sanitizer.
- [Kubernetes Test Infrastructure](https://github.com/kubernetes/test-infra) - Test infrastructure for the Kubernetes project.
- [Katib](https://github.com/kubeflow/katib) - Hyperparameter Tuning on Kubernetes.
- [Kapitan](https://github.com/deepmind/kapitan) - Generic templated configuration management for Kubernetes, Terraform and other things.
- [How Airbnb Simplified the Kubernetes Workflow for 1000+ Engineers (2019)](https://www.infoq.com/news/2019/03/airbnb-kubernetes-workflow)
- [Boosting your kubectl productivity (2019)](https://learnk8s.io/blog/kubectl-productivity/)
- [Polaris](https://github.com/reactiveops/polaris) - Validation of best practices in your Kubernetes clusters.
- [qlkube](https://github.com/qlkube/qlkube) - GraphQL api for Kubernetes.
- [Typhoon](https://github.com/poseidon/typhoon) - Minimal and free Kubernetes distribution.
- [Kontemplate](https://github.com/tazjin/kontemplate) - Extremely simple Kubernetes resource templates.
- [OpenKruise/Kruise](https://github.com/openkruise/kruise) - Automate application workloads management on Kubernetes.
- [Monday](https://github.com/eko/monday) - Dev tool for microservice developers that run local applications and/or forward some others from Kubernetes or over SSH.
- [Ballista](https://github.com/andygrove/ballista) - PoC of distributed compute platform using Rust, Apache Arrow, and Kubernetes. [Article](https://andygrove.io/2019/07/announcing-ballista/)
- [Octant](https://github.com/vmware/octant) - Web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters.
- [shipcat](https://github.com/Babylonpartners/shipcat) - Standardisation tool and security layer on top of kubernetes to config manage microservices.
- [Okteto](https://github.com/okteto/okteto) - Rapidly iterate and test your applications by developing directly in your Kubernetes cluster.
- [Fabrikate](https://github.com/microsoft/fabrikate) - Making GitOps with Kubernetes easier one component at a time.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) - Machine Learning Deployment for Kubernetes.
- [Kubeval](https://github.com/instrumenta/kubeval) - Validate your Kubernetes configuration files, supports multiple Kubernetes versions.
- [Conftest](https://github.com/instrumenta/conftest) - Write tests against structured configuration data using the Open Policy Agent Rego query language.
- [Kuma](https://github.com/Kong/kuma) - Universal Control Plane for your Service Mesh. ([Web](https://kuma.io/))
- [Knative Eventing](https://github.com/knative/eventing) - Contains a work-in-progress eventing system that is designed to address a common need for cloud native development.
- [Navigator](https://github.com/jetstack/navigator) - Kubernetes extension for managing common stateful services on Kubernetes.
- [kube-aggregator](https://github.com/kubernetes/kube-aggregator) - Aggregator for Kubernetes-style API servers: dynamic registration, discovery summarization, secure proxy.
- [Kubernetes Networking: Behind the scenes (2019)](https://itnext.io/kubernetes-networking-behind-the-scenes-39a1ab1792bb)
- [Kubernetes Networking recommended reading list](https://github.com/nleiva/kubernetes-networking-links)
- [service-catalog](https://github.com/kubernetes-sigs/service-catalog) - Consume services in Kubernetes using the Open Service Broker API.
- [Autoscaler](https://github.com/kubernetes/autoscaler) - Autoscaling components for Kubernetes.
- [Appsody](https://appsody.dev/) - Provides everything you need to iteratively develop applications, ready for deployment to Kubernetes environments.
- [Gitkube](https://github.com/hasura/gitkube) - Build and deploy docker images to Kubernetes using git push.
- [Announcing Kubernetes Off-The-Shelf (KOTS) Software (2019)](https://blog.replicated.com/announcing-kots/)
- [chaoskube](https://github.com/linki/chaoskube) - Periodically kills random pods in your Kubernetes cluster.
- [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics) - Simple service that listens to the Kubernetes API server and generates metrics about the state of the objects.
- [Cloudflow](https://cloudflow.io/) - Enables you to quickly develop, orchestrate, and operate distributed streaming applications on Kubernetes.
- [Clusterlint](https://github.com/digitalocean/clusterlint) - Best practices checker for Kubernetes clusters.
- [An illustrated guide to Kubernetes Networking (2017)](https://itnext.io/an-illustrated-guide-to-kubernetes-networking-part-1-d1ede3322727)
- [Bank Vaults](https://github.com/banzaicloud/bank-vaults) - Umbrella project which provides various tools for Vault to make using and operating Hashicorp Vault easier.
- [RBAC Manager](https://github.com/FairwindsOps/rbac-manager) - Kubernetes operator that simplifies the management of Role Bindings and Service Accounts.
- [inlets-operator](https://github.com/inlets/inlets-operator) - Your private Kubernetes Service, with a public endpoint.
- [Chaos Mesh](https://github.com/pingcap/chaos-mesh) - Cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments.
- [Grafana Tanka](https://github.com/grafana/tanka) - Flexible, reusable and concise configuration for Kubernetes.
- [Kubernetes Best Practices: Blueprints for Building Successful Applications on Kubernetes (2019)](https://www.goodreads.com/book/show/50351477-kubernetes-best-practices)
- [PoC to write integration tests in Go with Kubernetes by Gianluca Arbezzano (2019)](https://www.youtube.com/watch?v=Dt-pQSNfXlM)
- [kubethanos](https://github.com/berkay-dincer/kubethanos) - Kills half of your randomly selected kubernetes pods.
- [KubeNix](https://github.com/xtruder/kubenix) - Kubernetes resource builder using nix.
- [Postgres Operator](https://github.com/zalando/postgres-operator) - Creates and manages PostgreSQL clusters running in Kubernetes.
- [Contour](https://github.com/projectcontour/contour) - Kubernetes ingress controller using Lyft's Envoy proxy.
- [Roperator](https://github.com/psFried/roperator) - Lets you easily write Kubernetes Operators in Rust.
- [Krustlet](https://github.com/deislabs/krustlet) - Kubernetes Kubelet in Rust for running WASM. ([Article](https://deislabs.io/posts/introducing-krustlet/))
- [WaeaveWorks](https://www.weave.works/) - Operate and manage production ready Kubernetes with Weave Kubernetes Platform.
- [Gravity](https://github.com/gravitational/gravity) - Opinionated image-based Kubernetes packaging and management tools.
- [kubenav](https://github.com/kubenav/kubenav) - Navigator for your Kubernetes clusters right in your pocket.
- [Kyverno](https://github.com/nirmata/kyverno) - Kubernetes Native Policy Management.
- [Nirmata](https://www.nirmata.com/) - Unified management plane for all your Kubernetes clusters and workloads.
- [Deep Dive into Kubernetes Internals for Builders and Operators (2020)](https://www.youtube.com/watch?v=3KtEAa7_duA)
- [Rode](https://github.com/liatrio/rode) - Cloud native software supply chain.
- [kube-monkey](https://github.com/asobti/kube-monkey) - Implementation of Netflix's Chaos Monkey for Kubernetes clusters.
- [Crash Course in Kubernetes: blog series (2020)](https://blog.tilt.dev/2019/10/16/crash-course-kubernetes-overview.html)
- [Fabio](https://github.com/fabiolb/fabio) - Fast, modern, zero-conf load balancing HTTP(S) and TCP router for deploying applications managed by consul.
- [Rook](https://github.com/rook/rook) - Storage Orchestration for Kubernetes.
- [Solo](https://www.solo.io/) - Next generation API gateway to connect, secure and control traffic to any application on any infrastructure.
- [Gloo](https://github.com/solo-io/gloo) - Envoy-Powered API Gateway.
- [Keel](https://github.com/keel-hq/keel) - Kubernetes Operator to automate Helm, DaemonSet, StatefulSet & Deployment updates.
- [GLBC](https://github.com/kubernetes/ingress-gce) - Ingress controller for Google Cloud.
- [Kube Profefe](https://github.com/profefe/kube-profefe) - Continuous profiling made easy in Kubernetes with profefe.
- [Octant](https://github.com/vmware-tanzu/octant) - Web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters.
- [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) - General-purpose web UI for Kubernetes clusters.
- [Multi-tenancy](https://github.com/kubernetes-sigs/multi-tenancy) - Working place for multi-tenancy related proposals and prototypes.
- [Kubevious](https://github.com/kubevious/kubevious) - Application centric Kubernetes UI.
- [client-go](https://github.com/kubernetes/client-go) - Go client for Kubernetes.
- [Hubble](https://github.com/cilium/hubble) - Network, Service & Security Observability for Kubernetes.
- [NATS Streaming Operator](https://github.com/nats-io/nats-streaming-operator) - Operator for managing NATS Streaming clusters running on Kubernetes.
- [What is your favorite Kubernetes feature that nobody seems to know about? (2020)](https://www.reddit.com/r/kubernetes/comments/f9fque/what_is_your_favorite_kubernetes_feature_that/)
- [Advanced Persistence Threats: The Future of Kubernetes Attacks (2020)](https://www.youtube.com/watch?v=CH7S5rE3j8w)
- [Kubernetes Engine Samples](https://github.com/GoogleCloudPlatform/kubernetes-engine-samples)
- [How to use Open Virtual Networking with Kubernetes](https://github.com/ovn-org/ovn-kubernetes)
- [RBACSYNC](https://github.com/cruise-automation/rbacsync) - Automatically sync groups into Kubernetes RBAC.
- [Hub](https://github.com/cncf/hub) - Web-based application that enables finding, installing, and publishing packages and configurations for CNCF projects.
- [apiserver](https://github.com/kubernetes/apiserver) - Library for writing a Kubernetes-style API server.
- [Active-Monitor](https://github.com/keikoproj/active-monitor) - Kubernetes custom resource controller which enables deep cluster monitoring using Argo workflows.
- [kube-capacity](https://github.com/robscott/kube-capacity) - Simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster.
- [Kubelive](https://github.com/ameerthehacker/kubelive) - kubectl tool reinvented to be more reactive and interactive.
- [Lens](https://github.com/lensapp/lens) - Kubernetes IDE. ([Web](https://k8slens.dev/))
- [Rancher Kubernetes Engine (RKE)](https://github.com/rancher/rke) - Extremely simple, lightning fast Kubernetes distribution that runs entirely within containers.
- [Prometheus Operator](https://github.com/coreos/prometheus-operator) - Creates/configures/manages Prometheus clusters atop Kubernetes.
- [Rudr](https://github.com/oam-dev/rudr) - Kubernetes Implementation of the Open Application Model.
- [k3sup](https://github.com/alexellis/k3sup) - Light-weight utility to get from zero to KUBECONFIG with k3s on any local or remote VM.
- [CRI-O](https://github.com/cri-o/cri-o) - OCI-based implementation of Kubernetes Container Runtime Interface.
- [Linkerd](https://github.com/linkerd/linkerd2) - Service mesh for Kubernetes and beyond. ([Web](https://linkerd.io/))
- [linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - World's best service mesh proxy.
- [Predictive Horizontal Pod Autoscaler](https://github.com/jthomperoo/predictive-horizontal-pod-autoscaler)
- [Kubie](https://github.com/sbstp/kubie) - More powerful alternative to kubectx and kubens. ([Article](https://blog.sbstp.ca/introducing-kubie/))
- [Crossplane](https://github.com/crossplane/crossplane) - Open source control plane to manage your infrastructure and applications the Kubernetes way. ([Web](https://crossplane.io/))
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)
- [kube-prompt](https://github.com/c-bata/kube-prompt) - Interactive kubernetes client featuring auto-complete.
- [Kubernetes Custom Resource API Reference Docs generator](https://github.com/ahmetb/gen-crd-api-reference-docs)
- [oneinfra](https://github.com/oneinfra/oneinfra) - Kubernetes as a Service platform. It empowers you to provide or consume Kubernetes clusters at scale, on any platform or service provider.
- [Anthos — Driving business agility and efficiency (2020)](https://cloud.google.com/blog/topics/anthos/anthos-for-aws-is-now-ga) ([HN](https://news.ycombinator.com/item?id=22951790))
- [netshoot](https://github.com/nicolaka/netshoot) - Docker + Kubernetes network trouble-shooting swiss-army container.
- [Domesticating Kubernetes: Kubernetes as home server on bare metal in 150 minutes (2020)](https://blog.quickbird.uk/domesticating-kubernetes-d49c178ebc41) ([HN](https://news.ycombinator.com/item?id=23040030))
- [ktunnel](https://github.com/omrikiei/ktunnel) - Expose your local resources to kubernetes.
- [Kubeletctl](https://github.com/cyberark/kubeletctl) - Client for kubelet.
- [Coding a real-time dashboard for Kubernetes](https://learnk8s.io/real-time-dashboard)
- [Build a Graph of Kubernetes API Objects in Go (2020)](https://cybernetist.com/2020/05/05/build-a-graph-of-kubernetes-api-objects-in-go/)
- [Building a TODO API in Golang with Kubernetes (2020)](https://levelup.gitconnected.com/building-a-todo-api-in-golang-with-kubernetes-1ec593f85029)
- [Permission manager](https://github.com/sighupio/permission-manager) - Enables a super-easy and user-friendly RBAC management for Kubernetes.
- [kube-score](https://github.com/zegl/kube-score) - Tool that performs static code analysis of your Kubernetes object definitions.
- [k3s](https://github.com/rancher/k3d) - Lightweight Kubernetes distribution by Rancher.
- [10 common mistakes using kubernetes (2020)](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/)
- [Goldilocks](https://github.com/FairwindsOps/goldilocks) - Get your resource requests "Just Right".
- [Lokomotive](https://github.com/kinvolk/lokomotive) - Open source Kubernetes distribution that ships pure upstream Kubernetes.
- [Amazon Elastic Kubernetes Service (Amazon EKS) Best Practices](https://github.com/aws/aws-eks-best-practices)
- [KFServing](https://github.com/kubeflow/kfserving) - Serverless Inferencing on Kubernetes.
- [kube-backup](https://github.com/pieterlange/kube-backup) - Kubernetes resource state sync to git.
- [Why is Kubernetes getting so popular? (2020)](https://stackoverflow.blog/2020/05/29/why-kubernetes-getting-so-popular/) ([HN](https://news.ycombinator.com/item?id=23354418))
- [Sloop](https://github.com/salesforce/sloop) - Kubernetes History Visualization.
- [microcks](https://github.com/microcks/microcks) - Kubernetes native tool for mocking and testing API and micro-services.
- [Weave Kubernetes System Control - wksctl](https://github.com/weaveworks/wksctl) - Allows simple creation of a Kubernetes cluster given a set of IP addresses and an SSH key.
- [stern](https://github.com/wercker/stern) - Multi pod and container log tailing for Kubernetes.
- [Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server) - Scalable, efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines.
- [Source controller](https://github.com/fluxcd/source-controller) - Experimental source manager.
- [Cluster API](https://github.com/kubernetes-sigs/cluster-api) - Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management.
- [Pulumi Kubernetes Resource Provider](https://github.com/pulumi/pulumi-kubernetes)
- [aws-k8s-tester](https://github.com/aws/aws-k8s-tester) - Set of utilities and libraries for "testing" Kubernetes on AWS.
- [Go FlagZ](https://github.com/mwitkow/go-flagz) - Dynamic, thread-safe flag variables that can be modified at runtime through etcd or Kubernetes.
- [Argo CD](https://github.com/argoproj/argo-cd) - Declarative Continuous Delivery for Kubernetes.
- [Kubernetes Basic Learning](https://github.com/knrt10/kubernetes-basicLearning) - Understand Kubernetes step by step. A simple repo for beginners.
- [arkade](https://github.com/alexellis/arkade) - Kubernetes apps for developers.
- [Continuous Deployment to Kubernetes with Gitea and Drone (2020)](https://christine.website/blog/drone-kubernetes-cd-2020-07-10)
- [Lobsters: What has your experience with Kubernetes been like? (2020)](https://lobste.rs/s/kx1jj4/what_has_your_experience_with_kubernetes)
- [Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets) - Integrate external secret management systems with Kubernetes.
- [A single-node Kubernetes cluster without virtualization or a container registry (2020)](https://notes.eatonphil.com/a-single-node-kubernetes-cluster-without-virtualization-or-a-container-registry.html)
- [A Hacker’s Guide to Kubernetes Networking (2017)](https://thenewstack.io/hackers-guide-kubernetes-networking/)
- [Multi-Cluster Kubernetes and Service Mesh Patterns (2020)](https://www.solo.io/blog/webinar-recap-multi-cluster-kubernetes-and-service-mesh-patterns/)
- [Tools to use with the controller-runtime libraries](https://github.com/kubernetes-sigs/controller-tools)
- [How to Create Ephemeral Environments using Crossplane and ArgoCD? (2020)](https://www.infracloud.io/blogs/how-to-create-ephemeral-environments-using-crossplane-and-argocd/)
- [Gitpod](https://github.com/gitpod-io/gitpod) - Open-source Kubernetes application providing fully-baked, collaborative development environments in your browser - powered by VS Code. ([Article](https://www.gitpod.io/blog/opensource/))
- [HyScale](https://github.com/hyscale/hyscale) - Abstraction framework over Kubernetes. ([HN](https://news.ycombinator.com/item?id=24270669))
- [Kubernetes: Make your services faster by removing CPU limits (2020)](https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/) ([HN](https://news.ycombinator.com/item?id=24351566))
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Terraform module to create an Elastic Kubernetes (EKS) cluster and associated worker instances on AWS.
- [Kubernetes YAML Generator](https://k8syaml.com/) ([HN](https://news.ycombinator.com/item?id=24419441))
- [What we learned after a year on Kubernetes (2020)](https://about.gitlab.com/blog/2020/09/16/year-of-kubernetes/) ([HN](https://news.ycombinator.com/item?id=24498108)) ([Tweet](https://twitter.com/benskuhn/status/1306379191772946432))
- [Awesome Kubernetes Resources](https://github.com/tomhuang12/awesome-k8s-resources)
- [Reducing AWS data transfer cost — Going Multi-AZ to Single-AZ Kubernetes (2020)](https://lambda.grofers.com/reducing-aws-data-transfer-cost-kubernetes-from-multi-az-to-single-az-341d890553b6)
- [kube-events-exporter](https://github.com/rhobs/kube-events-exporter) - Kubernetes events aggregator and exporter.
- [Structured Merge and Diff](https://github.com/kubernetes-sigs/structured-merge-diff) - Test cases for Kubernetes "apply" operation.
- [kubecolor](https://github.com/dty1er/kubecolor) - Colorize your kubectl output.
- [MicroK8s](https://github.com/ubuntu/microk8s) - Small, fast, single-package Kubernetes for developers, IoT and edge. ([Web](https://microk8s.io/)) ([HN](https://news.ycombinator.com/item?id=24786646))
- [Evolution of k8s worker nodes (2020)](https://thechief.io/c/abvijaykumar/evolution-k8s-worker-nodes/)
- [Kiali](https://kiali.io/) - Service mesh observability and configuration. ([Kiali Operator](https://github.com/kiali/kiali-operator)) ([Kiali Front End](https://github.com/kiali/kiali-ui))
- [KubeVirt](https://github.com/kubevirt/kubevirt) - Kubernetes Virtualization API and runtime in order to define and manage virtual machines. ([Web](https://kubevirt.io/))
- [Cluster Turndown](https://github.com/kubecost/cluster-turndown) - Automated turndown of Kubernetes clusters on specific schedules.
- [Kubernetes Enhancements](https://github.com/kubernetes/enhancements)
- [kubeaudit](https://github.com/Shopify/kubeaudit) - Command line tool and a Go package to audit Kubernetes clusters for various different security concerns.
- [CustomResourceDefinitions Automatic Docs](https://doc.crds.dev/) ([Code](https://github.com/crdsdev/doc))
- [Modernizing the Tech Stack for a B2B SaaS Product Running on Bare Metal (2020)](https://www.aislelabs.com/blog/2020/10/23/modernizing-the-tech-stack-for-a-b2b-saas-product-running-on-bare-metal/)
- [BotKube](https://github.com/infracloudio/botkube) - App that helps you monitor your Kubernetes cluster, debug critical deployments & gives recommendations for standard practices. ([Docs](https://www.botkube.io/))
- [Isopod](https://github.com/cruise-automation/isopod) - Expressive DSL and framework for Kubernetes configuration without YAML.
- [Starboard](https://github.com/aquasecurity/starboard) - Kubernetes-native security tool kit.
- [kube-bench](https://github.com/aquasecurity/kube-bench) - Checks whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark.
- [kube-hunter](https://github.com/aquasecurity/kube-hunter) - Hunt for security weaknesses in Kubernetes clusters.
- [kubectl-who-can](https://github.com/aquasecurity/kubectl-who-can) - Show who has RBAC permissions to perform actions on different resources in Kubernetes.
- [kOps](https://github.com/kubernetes/kops) - Kubernetes Operations (kops) - Production Grade K8s Installation, Upgrades, and Management.
- [KubeLinter](https://github.com/stackrox/kube-linter) - Static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.
- [Gardener](https://github.com/gardener/gardener) - Deliver fully-managed clusters at scale everywhere with your own Kubernetes-as-a-Service. ([Web](https://gardener.cloud/))
- [kraan](https://github.com/fidelity/kraan) - Building platforms on top of K8s. Helps you deploy and manage 'layers' on top of kubernetes.
- [Certified Kubernetes Security Specialist resources](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)
- [Managing my personnal servers in 2020 with K3s](https://github.com/erebe/personal-server) ([HN](https://news.ycombinator.com/item?id=25001789)) ([Lobsters](https://lobste.rs/s/zopjay/managing_my_personal_server_2020))
- [stern](https://github.com/stern/stern) - Multi pod and container log tailing for Kubernetes.
- [Kubectl Code](https://github.com/kubernetes/kubectl)
- [Sourcegraph on Kubernetes](https://github.com/sourcegraph/deploy-sourcegraph) - Deploy Sourcegraph to a Kubernetes cluster for large-scale code search and intelligence.
- [Red Team KubeCTL Cheat Sheet](https://github.com/lightspin-tech/red-kube)
- [Move2Kube](https://github.com/konveyor/move2kube) - Command-line tool that accelerates the process of re-platforming to Kubernetes/Openshift.
- [Knatify](https://github.com/markusthoemmes/knatify) - Tool (or set of tools) that make it dead simple to migrate existing Kubernetes deployments into Knative Services.
- [k0s](https://github.com/k0sproject/k0s) - Zero Friction Kubernetes. ([HN](https://news.ycombinator.com/item?id=25117451))
- [Headlamp](https://github.com/kinvolk/headlamp) - Easy-to-use and extensible Kubernetes web UI. ([Web](https://kinvolk.io/)) ([HN](https://news.ycombinator.com/item?id=25118870))
- [kube-rs](https://github.com/clux/kube-rs) - Kubernetes client and futures controller runtime.
- [Cloud Development Kit for Kubernetes](https://github.com/awslabs/cdk8s) - Define Kubernetes native apps and abstractions using object-oriented programming. ([Web](https://cdk8s.io/))
- [How to get started contributing to Kubernetes (2020)](https://twitter.com/dims/status/1329400522890219520)
- [BuildKit CLI for kubectl](https://github.com/vmware-tanzu/buildkit-cli-for-kubectl) - Tool for building container images with your Kubernetes cluster.
- [KubeVela](https://github.com/oam-dev/kubevela) - Easy-to-use tool that enables them to describe and ship their applications to Kubernetes with minimal effort. ([Docs](https://kubevela.io/#/en/quick-start))
- [Swoll](https://github.com/criticalstack/swoll) - Suite of applications and APIs for monitoring kernel-level activity on a live Kubernetes cluster.
- [illuminatio](https://github.com/inovex/illuminatio) - Tool for automatically testing kubernetes network policies.
- [Metacontroller](https://github.com/metacontroller/metacontroller) - Add-on for Kubernetes that makes it easy to write and deploy custom controllers in the form of simple scripts.
- [Karpenter](https://github.com/awslabs/karpenter) - Metrics-driven autoscaler built for Kubernetes and can run in any Kubernetes cluster anywhere.
- [Kubectl Tricks](https://kuber.host/docs/kubectl_tricks)
- [Kuber](https://kuber.host/) - Managed Kubernetes Cloud.
- [Kubernetes Website Code](https://github.com/kubernetes/website)
- [Open Service Mesh (OSM)](https://github.com/openservicemesh/osm) - Lightweight, extensible, Cloud Native service mesh that allows users to uniformly manage, secure, and get out-of-the-box observability features for highly dynamic microservice environments. ([Web](https://openservicemesh.io/))
- [A better Kubernetes from the ground up (2020)](https://blog.dave.tf/post/new-kubernetes/) ([HN](https://news.ycombinator.com/item?id=25243159)) ([Lobsters](https://lobste.rs/s/x2e6q5/better_kubernetes_from_ground_up))
- [Bootstrap OpenFaaS Cloud for your team](https://github.com/openfaas/ofc-bootstrap)
- [Kubernetes Examples](https://github.com/kubernetes/examples) - Contains a number of examples of how to run real applications with Kubernetes.
- [k8s-openapi](https://github.com/Arnavion/k8s-openapi) - Rust bindings for the Kubernetes client API.
- [Helm Chart Testing](https://github.com/helm/chart-testing) - CLI tool for linting and testing Helm charts.
- [Amazon EKS Distro](https://github.com/aws/eks-distro) - Kubernetes distribution based on and used by Amazon Elastic Kubernetes Service (EKS) to create reliable and secure Kubernetes clusters.
- [Virtual Kubelet Provider for Systemd](https://github.com/miekg/vks)
- [Isovalent](https://isovalent.com/) - eBPF-powered Cloud Native Networking & Security.
- [Kubernetes Python Client](https://github.com/kubernetes-client/python)
- [AWS Controllers for Kubernetes (ACK)](https://github.com/aws/aws-controllers-k8s) - Lets you define and use AWS service resources directly from Kubernetes.
- [Learnings From Two Years of Kubernetes in Production (2020)](https://lambda.grofers.com/learnings-from-two-years-of-kubernetes-in-production-b0ec21aa2814)
- [localizer](https://github.com/jaredallard/localizer) - No-frills local development tool for service developers working in Kubernetes.
- [Velero](https://velero.io/) - Backup and migrate Kubernetes resources and persistent volumes. ([Code](https://github.com/vmware-tanzu/velero))
- [kured](https://github.com/weaveworks/kured) - Kubernetes Reboot Daemon.
- [version-checker](https://github.com/jetstack/version-checker) - Kubernetes utility for observing the current versions of images running in the cluster, as well as the latest available upstream.
- [Octopod](https://github.com/typeable/octopod) - Open-source self-hosted solution for managing multiple deployments in a Kubernetes cluster in a user-friendly web interface.
- [Argo Events](https://github.com/argoproj/argo-events) - Event-driven Workflow Automation Framework. ([Docs](https://argoproj.github.io/argo-events/))
- [Pixie](https://pixielabs.ai/) - Kubernetes Monitoring, Application Debug Platform. ([Code](https://github.com/pixie-labs/pixie))
- [Kubermatic](https://www.kubermatic.com/) - Enterprise Kubernetes Platform & Automated Multi-cloud Operations. ([Code](https://github.com/kubermatic/kubermatic))
- [Kubelet Deep Dive: Writing a Kubelet in Rust (2020)](https://www.youtube.com/watch?v=idMf865wwD8)
- [Image Builder](https://github.com/kubernetes-sigs/image-builder) - Cross provider Kubernetes image building utility.
- [Kubernetes Template Project](https://github.com/kubernetes/kubernetes-template-project)
- [kube-vip](https://github.com/plunder-app/kube-vip) - Kubernetes Control Plane Virtual IP and Load-Balancer.
- [Akri](https://github.com/deislabs/akri) - Kubernetes Resource Interface for the Edge.
- [KubeEdge](https://kubeedge.io/en/) - Kubernetes Native Edge Computing Framework. ([Code](https://github.com/kubeedge/kubeedge))
- [Picking a Kubernetes Orchestrator: Airflow, Argo, and Prefect (2020)](https://medium.com/arthur-engineering/picking-a-kubernetes-orchestrator-airflow-argo-and-prefect-83539ecc69b) ([HN](https://news.ycombinator.com/item?id=25455896))
- [Operator SDK](https://github.com/operator-framework/operator-sdk) - SDK for building Kubernetes applications. Provides high level APIs, useful abstractions, and project scaffolding. ([Web](https://sdk.operatorframework.io/))
- [Kubectl Sheetcheat](https://github.com/eon01/kubectl-SheetCheat)
- [Gentle introduction to Kubernetes](https://github.com/eon01/kubernetes-workshop)
- [Kubernetes is a container orchestration system, but that's not the point (2020)](https://nikhiljha.com/posts/kubernetes-intro/) ([Lobsters](https://lobste.rs/s/xdcrsa/kubernetes_is_container_orchestration))
- [helm-docs](https://github.com/norwoodj/helm-docs) - Tool for automatically generating markdown documentation for helm charts.
- [Kubecost](https://github.com/kubecost/cost-model) - Cross-cloud cost allocation models for workloads running on Kubernetes. ([Web](https://kubecost.com/)) ([GitHub](https://github.com/kubecost))
- [Kubernetes Pondering (2020)](https://christine.website/blog/k8s-pondering-2020-12-31) ([Lobsters](https://lobste.rs/s/avqtvh/kubernetes_pondering))
- [Accelerated Feedback Loops when Developing for Kubernetes with Conftest (2020)](https://reese.dev/accelerated-feedback-loops-when/)
- [kubectl-neat](https://github.com/itaysk/kubectl-neat) - Clean up Kuberntes yaml and json output to make it readable.
- [Writing a Kubernetes CRD Controller in Rust (2019)](http://technosophos.com/2019/08/07/writing-a-kubernetes-controller-in-rust.html) ([HN](https://news.ycombinator.com/item?id=25704250))
- [Lifting Developers’ Productivity with BuildKit CLI for kubectl (2021)](https://container-registry.com/posts/productivity-lift-buildkit-cli-for-kubectl/)
- [ekz](https://github.com/chanwit/ekz) - EKS-D Kubernetes distribution for desktop.
- [kustomize-controller](https://github.com/fluxcd/kustomize-controller) - Kubernetes operator, specialized in running continuous delivery pipelines for infrastructure and workloads defined with Kubernetes manifests and assembled with Kustomize.
- [faas-netes](https://github.com/openfaas/faas-netes) - Kubernetes controller for OpenFaaS.
- [Weave Scope](https://github.com/weaveworks/scope) - Troubleshooting & Monitoring for Docker & Kubernetes. ([Web](https://www.weave.works/oss/scope/))
- [Kubernetes on Rails](https://kubernetesonrails.com/) - Premium training course to get you up-to-speed on deploying web applications using Kubernetes.
- [apimachinery](https://github.com/kubernetes/apimachinery) - Scheme, typing, encoding, decoding, and conversion packages for Kubernetes and Kubernetes-like API objects.
- [Marblerun](https://github.com/edgelesssys/marblerun) - Service mesh for confidential computing. Deploy, scale, and verify your confidential microservices on vanilla Kubernetes. 100% Go, 100% cloud native. ([Web](https://marblerun.sh/))
- [Awesome Kubernetes Operators](https://github.com/operator-framework/awesome-operators)
- [Suspicious pods](https://github.com/edrevo/suspicious-pods) - Prints a list of k8s pods that might not be working correctly.
- [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat) - Intentionally vulnerable cluster environment to learn and practice Kubernetes security. ([Web](https://madhuakula.com/kubernetes-goat/about.html))
- [Carvel](https://carvel.dev/) - Provides a set of reliable, single-purpose, composable tools that aid in your application building, configuration, and deployment to Kubernetes.
- [Kube-router](https://github.com/cloudnativelabs/kube-router) - Turnkey solution for Kubernetes networking with aim to provide operational simplicity and high performance. ([Web](https://www.kube-router.io/))
- [Certified Kubernetes Security Specialist Study Guide](https://github.com/stackrox/Kubernetes_Security_Specialist_Study_Guide)
- [K3s Private Cluster](https://github.com/sagittaros/terraform-k3s-private-cloud) - Deploy full fledged K3s private clusters with Terraform.
- [Scaling Kubernetes to 7,500 Nodes (2021)](https://openai.com/blog/scaling-kubernetes-to-7500-nodes/) ([HN](https://news.ycombinator.com/item?id=25907312))
- [Kubernetes API Visualized (2021)](https://twitter.com/iximiuz/status/1353045442087571456)
- [Swift K8s Service Discovery](https://github.com/tuplestream/swift-k8s-service-discovery) - Discover pods of interest in a Kubernetes cluster as they become available.
- [Flux](https://github.com/fluxcd/flux2) - Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit.
- [How to get to speak at KubeCon (2020)](https://blog.alexellis.io/how-to-speak-at-kubecon/)
- [EdgeNet](https://edge-net.org/) - Kubernetes adapted for the network edge. It allows you to deploy applications to hundreds of nodes that are scattered across the internet. ([Code](https://github.com/EdgeNet-project/edgenet))
- [Rancher](https://rancher.com/) - Enterprise Kubernetes Management. ([Website Code](https://github.com/rancher/ui)) ([GitHub](https://github.com/rancher))
- [Kosko](https://kosko.dev/) - Organize Kubernetes manifests in JavaScript. ([Code](https://github.com/tommy351/kosko))
- [sample-apiserver](https://github.com/kubernetes/sample-apiserver) - Demonstration of how to use the k8s.io/apiserver library to build a functional API server.
- [Kubernetes 101 series retrospective, and a new book (2021)](https://www.jeffgeerling.com/blog/2021/kubernetes-101-series-retrospective-and-new-book)
- [Kubernetes, Pods, Kubernetes Pod Concepts (2021)](https://releaseapp.io/blog/kubernetes-pods-advanced-concepts-explained)
- [Helmfile](https://github.com/roboll/helmfile) - Deploy Kubernetes Helm Charts.
- [Kubernetes Internals](https://github.com/shubheksha/kubernetes-internals) - Collection of resources that discuss the inner workings of Kubernetes.
- [Serverless Kubernetes (2021)](https://cto.ai/blog/announcing-cto-ai-kubernetes-paas/) ([HN](https://news.ycombinator.com/item?id=26170612))
- [monokube](https://github.com/stevelacy/monokube) - Monorepo deployment manager for k8s.
- [A Kubernetes User's Guide to HashiCorp Nomad (2021)](https://www.hashicorp.com/blog/a-kubernetes-user-s-guide-to-hashicorp-nomad)
- [GKE Autopilot: an nodeless and elastic Kubernetes cluster mode (2021)](https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot) ([HN](https://news.ycombinator.com/item?id=26252317))
- [Google admits Kubernetes container tech is too complex (2021)](https://www.theregister.com/2021/02/25/google_kubernetes_autopilot/) ([HN](https://news.ycombinator.com/item?id=26271470))
- [Take a look at Nomad before jumping on Kubernetes (2021)](https://atodorov.me/2021/02/27/why-you-should-take-a-look-at-nomad-before-jumping-on-kubernetes/) ([HN](https://news.ycombinator.com/item?id=26291975))
- [K8GB](https://www.k8gb.io/) - Kubernetes Global Balancer. ([Code](https://github.com/AbsaOSS/k8gb))
- [Kubernetes Networking Book](https://www.oreilly.com/library/view/kubernetes-networking/9781492081647/) - Guide for anyone who wants to deploy, manage, or troubleshoot a production scale Kubernetes network.
- [Jetstack Preflight](https://github.com/jetstack/preflight) - Automatically perform Kubernetes cluster configuration checks using Open Policy Agent (OPA).
- [Argo Rollouts](https://github.com/argoproj/argo-rollouts) - Progressive Delivery for Kubernetes.
- [Exploring Kubernetes Operator Pattern (2021)](https://iximiuz.com/en/posts/kubernetes-operator-pattern/)
- [kube-fledged](https://github.com/senthilrch/kube-fledged) - Kubernetes add-on for creating and managing a cache of container images directly on the worker nodes of a kubernetes cluster.
- [Awesome Kubernetes Security](https://github.com/magnologan/awesome-k8s-security)
- [Porter](https://www.getporter.dev/) - Fully-managed PaaS that lets teams automate DevOps. Deploy and manage apps within AWS, GCP, DO, and more. ([Code](https://github.com/porter-dev/porter)) ([Dashboard](https://dashboard.getporter.dev/login))
- [Kubernetes deployment strategies explained](https://github.com/ContainerSolutions/k8s-deployment-strategies) ([Article](https://blog.container-solutions.com/kubernetes-deployment-strategies))
- [kubectl-cost](https://github.com/kubecost/kubectl-cost) - CLI for determining the cost of Kubernetes workloads.
- [Capsule](https://github.com/clastix/capsule) - Kubernetes Operator for multi-tenancy.
- [Wrangler](https://github.com/rancher/wrangler) - Framework for wrapping clients, informers, listers into a simple usable controller pattern that promotes some good practices.
- [Longhorn](https://longhorn.io/) - Cloud native distributed block storage for Kubernetes. ([Code](https://github.com/longhorn/longhorn))
- [Kubernetes README](https://kubernetesreadme.com/) - What to Read to Learn More About Kubernetes. ([Code](https://github.com/chris-short/kubernetesreadme.com))
- [Oxidizing the Kubernetes operator](https://www.pavel.cool/rust/rust-kubernetes-operators/)
- [A detailed guide to SSO on Kubernetes](http://www.talkingquickly.co.uk/kubernetes-sso-a-detailed-guide) ([HN](https://news.ycombinator.com/item?id=26709628))
- [KubePlus](https://github.com/cloud-ark/kubeplus) - CRD for CRDs to design multi-tenant platform services from- [Native Kubernetes Continuous Delivery (2021)](https://www.reddit.com/r/kubernetes/comments/n2jy7f/native_kubernetes_continuous_delivery/) Helm charts.
- [Pixie](https://px.dev/) - Kubernetes observability for developers - service health, request tracing, infra health, etc.
- [yannh/kubeconform](https://github.com/yannh/kubeconform) - A FAST Kubernetes manifests validator, with support for Custom Resources
- [Kubernetes Examples](https://github.com/ContainerSolutions/kubernetes-examples)
- [Road to Secure Kubernetes](https://github.com/nsmith5/road-to-secure-kubernetes) - tutorial on securing kubernetes, from basics to advanced topics
- [Kubetools](https://collabnix.github.io/kubetools/) - A Curated List of Kubernetes Tools
- [Gateway API](https://gateway-api.sigs.k8s.io/)
- [Cubernetes](https://www.justingarrison.com/blog/2022-07-06-cubernetes/) - RaspberryPI Kubernetes cluster in a travel case

