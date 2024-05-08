# Architecture

## Entity Component System

[**Entity component system**](https://en.wikipedia.org/wiki/Entity_component_system) is a software architectural pattern mostly used in video game development for the representation of game world objects. An ECS comprises entities composed from components of data, with systems which operate on entities' components.

## Domain-Drive Design

[**Domain-driven design**](https://en.wikipedia.org/wiki/Domain-driven_design) is about designing fotware based on models of the underlying domain.

DDD deals with large domains using [**Bounded Context**](https://martinfowler.com/bliki/BoundedContext.html)s and explicit relationship between them. DDD recognizes that complete unification of models acrross organization isn't always feasible so instead Bounded Contexts allow us to divide large system into smaller sub-systems where each sub-system can have unrelated concepts as well as shared concepts where mapping between them needs to be made explicit.
  - [Splitting a Domain Across Multiple Bounded Contexts](https://verraes.net/2021/06/split-domain-across-bounded-contexts/)


- [Domain-Driven Design: Tackling Complexity in the Heart of Software (book)](https://www.goodreads.com/en/book/show/179133) by Eric Evans - the OG DDD blue-cover book.
- [GETTING STARTED WITH DDD WHEN SURROUNDED BY LEGACY SYSTEMS (pdf)](https://www.domainlanguage.com/wp-content/uploads/2016/04/GettingStartedWithDDDWhenSurroundedByLegacySystemsV1.pdf) by Eric Evans
- [Implementing Domain-Driven Design (book)](https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design)
- [ Domain Driven Design Quickly (book)](https://www.infoq.com/minibooks/domain-driven-design-quickly/)

## Event Driven Architecture

- [Event Driven Architecture — 5 Pitfalls to Avoid](https://medium.com/wix-engineering/event-driven-architecture-5-pitfalls-to-avoid-b3ebf885bdb1)
- [The different types of events in event-driven systems](https://blog.frankdejonge.nl/the-different-types-of-events-in-event-driven-systems/)

## Hexagonal Architecture

[**Hexagonal architecture**](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)) is an architectural pattern used in software design. It aims at creating loosely coupled application components that can be easily connected to their software environment by means of ports and adapters. This makes components exchangeable at any level and facilitates test automation.

## Resources

- [Entity Component System FAQ](https://github.com/SanderMertens/ecs-faq) - Frequently asked questions about Entity Component Systems 
- [Pattern: Transactional outbox](https://microservices.io/patterns/data/transactional-outbox.html)
- [A pattern language for microservices](https://microservices.io/patterns/)
- [12 Factor App Revisited](https://architecturenotes.co/12-factor-app-revisited/)
- [No architecture is better than bad architecture](https://rogovoy.me/blog/no-architecture)
- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/)
- [The Distributed Computing Manifesto](https://www.allthingsdistributed.com/2022/11/amazon-1998-distributed-computing-manifesto.html)
- [Demystifying software architecture patterns](https://www.thoughtworks.com/insights/blog/architecture/demystify-software-architecture-patterns)
- [10 Design Patterns Explained in 10 Minutes](https://www.youtube.com/watch?v=tv-_1er1mWI) (video)
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) #architecture #event-driven
- [Command Query Responsibility Segregation (CQRS)](https://martinfowler.com/bliki/CQRS.html)
- [Real-time Messaging](https://slack.engineering/real-time-messaging/) #messaging #system-design
- [What we talk about when we talk about System Design](https://maheshba.bitbucket.io/blog/2023/07/12/Design.html)
- [Data-Oriented Design](https://www.dataorienteddesign.com/dodbook/dodmain.html)
