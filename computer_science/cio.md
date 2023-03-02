# CIO

[CIO (Chief Information Officer)](https://en.wikipedia.org/wiki/Chief_information_officer)

## Resources

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
