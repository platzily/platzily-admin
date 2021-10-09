- Start Date: (2021-16-06)
- RFC PR:
- Admin services Module:

# Summary

Admin services is like control tower of the platzily application. The admin module oveerseer the all administration system of the platzily platform.

Services like:

- Business Policies and content control policies
- Managment of the KPI and dashboard of the business process.

# Motivation

Why are we doing this?

- The system requires dashboard to manage and control of the issues, campaings, statistics, links and users.

What use cases does it support?

- When and user violates the policies of the business process admins services ban this user.

- Reactivation of the state of a camping, user and links

What is the expected outcome?

- Successfully polcies control.
- An informed user
- Customized reports

# Detailed design

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

## Golang ▬ BACK

- This programming lenguage its more powerfull than javascript. Its stable, and have high performacne memory process, his garbage collector are more efficient.

- As a team and students we want challenge ourselves in learning process of a entirely new programing lenguage.

- Is the favorite programing lenguage of our CEO.

## Next.js ▬ FRONT

- Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.

- TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

- Give a knlowdege base of the architecture of the strcuture to build on. Allows to fast development.

- Also is the favorite for the frontend of our CEO.

## Architecture

Main objective: Atenuate the coupling to the dependencies by connecting directly with Users and Links databases.
We already know that this is not a common practice but for the priject is a useful one.

- To have persistency and disponibility balance of data our architecture are communicate with two differents databases. Users and Links.

- The relation with users and links module is to assurance ,create trustness and rapidy response to the user infraction policies.

![Architecture](https://raw.githubusercontent.com/AbejaCruz/rfcs-AdminServices/a0fb216e59db7a45b2e8085c4323c8585dd82c41/images/Admin%20Platzily.svg)

![Architecture](https://raw.githubusercontent.com/AbejaCruz/rfcs-AdminServices/a0fb216e59db7a45b2e8085c4323c8585dd82c41/images/Admin%20Platzily_c3.svg)

# Drawbacks

Tradeoff:

- Techincall Debt // New Skills in the team.
- Easy development and rapid deployment. ( Next.js )
- Maintain the consistency and disponiblity of data by controlling Users and Links databases.

# Alternatives

What other designs have been considered?

- Consume the services of Users and Links. And allow bans

What is the impact of not doing this?

- In case of User, Links doesnt work we cannot do bans of the links.

# Adoption strategy

- Create rules to acces to the data bases of another services to manting good practices and constrains.

- Sharing the control rules.

# How we teach this

- The learning curve of the tecnology stack will growth by pai programming strategies, Platzy courses and self education.
