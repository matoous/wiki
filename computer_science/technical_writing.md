# Technical writing

**CIO** - [Chief Information Officer](https://en.wikipedia.org/wiki/Chief_information_officer)
  > In recent years it has become increasingly understood that knowledge limited to just business or just IT is not sufficient for success in this role. Instead, CIOs need both kinds of knowledge to manage IT resources and to manage and plan "ICT, including policy and practice development, planning, budgeting, resourcing and training." Also, CIOs are playing an increasingly important role in helping to control costs and increase profits via the use of ICT, and to limit potential organizational damage by setting up appropriate IT controls and planning for IT recovery from possible disasters.

## Resources

- [Ask HN: Examples of good technical writing?](https://news.ycombinator.com/item?id=31630915)
- [Ask HN: How to level up your technical writing?](https://news.ycombinator.com/item?id=31859040)
- [An Engineer’s Best Tips for Writing Documentation Devs Love](https://thenewstack.io/an-engineers-best-tips-for-writing-documentation-devs-love/)
  - don't tell anyone anything is _simple_
- [Technical Writing for Developers](https://css-tricks.com/technical-writing-for-developers/)
- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/) #design-docs
  - purpose:
    - Early identification of design issues when making changes is still cheap.
    - Achieving consensus around a design in the organization.
    - Ensuring consideration of cross-cutting concerns.
    - Scaling knowledge of senior engineers into the organization.
    - Form the basis of an organizational memory around design decisions.
    - Acts as a summary artifact in the technical portfolio of the software designer(s).
  - structure:
    - Context and scope
    - Goals and non-goals
    - The actual design
      - System-context-diagram
      - APIs
      - Data storage
      - Code and pseudo-code
      - Degree of constraint
    - Alternatives considered
    - Cross-cutting concerns
  - 10-20 pages, 1-3 pages mini-doc also possible
  - lifecycle:
    - Creation and rapid iteration
    - Review (may be in multiple rounds)
    - Implementation and iteration
    - Maintenance and learning
  - considerations:
    - Are you unsure about the right software design, and would it make sense to spend upfront time to gain certainty?
    - Relatedly, would it help to involve senior engineers, who might not be able to review every code-change, in the design?
    - Is the software design ambiguous or even contentious such that achieving organizational consensus around it would be valuable?
    - Does my team sometimes forget to consider privacy, security, logging or other cross-cutting concerns in the design?
    - Is there a strong need for documents that provide high-level insights into the design of legacy systems in the organization?
- [Writing docs well: why should a software engineer care?](https://surfingcomplexity.blog/2022/11/24/writing-docs-well-why-should-a-software-engineer-care/)
  - building shared understanding
  - tool for thinking
  - write to have influence in larger organizations
- [The Ultimate Guide To Software Architecture Documentation](https://www.workingsoftware.dev/software-architecture-documentation-the-ultimate-guide/)

## RFCs / RFDs

- [Scaling Engineering Teams via RFCs: Writing Things Down](https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs)
- [Engineering Planning with RFCs, Design Documents and ADRs](https://newsletter.pragmaticengineer.com/p/rfcs-and-design-docs)
- [My favorite product management templates](https://www.lennysnewsletter.com/p/my-favorite-templates-issue-37)
- [RFD 1 Requests for Discussion](https://oxide.computer/blog/rfd-1-requests-for-discussion/) - the approach to RFCs at Oxide Computer.
- [The Power of “Yes, if”: Iterating on our RFC Process](https://engineering.squarespace.com/blog/2019/the-power-of-yes-if)
  - common issues with RFC process:
    - designs don't get deep review and go into implementation phase
    - locally good decision that didn't fit into the broader scope
    - reviewers are not sure what to look for
    - distinguishing aside vs. blocker comments
    - missing process for saying _"This looks good to me"_, often silence means compliance
    - no clear definition of when it is ok to start implementing
  - solutions at squarespace
    - opinionated RFC template with `approvers` section
      - approvers have `yes` or `not yet` options
      - `not yet` means `yes, if ...`
    - `state` of the RFC is a freeform fields
      - one can tell what they expect at the current stage
      - e.g. `State: first draft, please give me brutally honest feedback on the document structure`
    - sections that are included in the template:
      - Alternatives Considered/Prior Art
      - Dependencies
      - Operational work
  - _Product Backend Council_ for RFCs discussion and reviews by the whole organization, once every 2 weeks
  - _Architecture Review_, twice a week where most senior engineers review RFCs in depth
    - 1 hour dedicated to each RFCs
    - attendees are expected to read the RFC beforehand
    - last 10 minutes for decisions, `yes, if ...` or just `yes`
- [Companies Using RFCs or Design Docs and Examples of These](https://blog.pragmaticengineer.com/rfcs-and-design-docs/)
- [Software Engineering RFC and Design Doc Examples and Templates](https://newsletter.pragmaticengineer.com/p/software-engineering-rfc-and-design)
- [A Tool for Discussion](https://oxide.computer/blog/a-tool-for-discussion)
- [RFCs at Sourcegraph](https://handbook.sourcegraph.com/company-info-and-process/communication/rfcs/)

### Templates

- [Figma PRD](https://coda.io/@yuhki/figmas-approach-to-product-requirement-docs/prd-name-of-project-1)
- [PRD Template](https://docs.google.com/document/d/1mEMDcHmtQ6twzNlpvF-9maNlAcezpWDtCnyIqWkODZs/edit#heading=h.7ueoyja6ijay) by Kevin Yien (Square)
