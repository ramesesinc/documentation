# Real Property Assessment

## Overview

The Real Property Assessment (RPA) Module is one of the core components
of ETRACS. It is responsible in managing real property data. The
information of real properties such as owners, land, machinery,
buildings and improvements are maintained and efficiently accessible. It
handles the automation of appraisal and assessment process of real
property by the Office of the Assessor. It also integrates with the Tax
Collection module to complete the business cycle of real property
taxation.

### Design Objectives

The main objective of the RPA module is to provide a fully-functional
and automated system for the management of real property data and to
streamline the operations of the Assessor’s Office for fast and
efficient delivery of basic services to its clients. Sharing of data and
integration with the other departments within the enterprise is also
vital inorder to offering a complete end-to-end assessment and
collection solution benefitting both the LGU and the taxpayers.

### Key Features

The key features of the RPA module in attaining its objectives are:

**Flexibility** – settings are very flexible and highly configurable
making the system responsive to the ever changing business requirements
and needs

**Fully Automated** – appraisal and assessment are fully automated
guaranteeing highly accurate and fair computations

**Workflow Support** – transactions are controlled by a workflow process
which tracks the status of documents, where it is and how long it is
under processing.

**Data Security** – data protection is vital and critical when it is
shared throughout the enterprise. The data is strongly protected through
an elaborate security protocol and authorization process.

**Online Certifications** – accurate and efficient issuance of
certifications online

**Report Generation** – generations of on-time and accurate management
reports

### Security Requirements

As with all ETRACS modules, the Real Property Assessment Module has
security requirements that must be satisfied before any transaction can
be performed on the system. This ensures that users are given the proper
authorizations and permissions. Users of the system are associated to
any of the built-in real property assessment roles or specific
user-defined roles.

**Roles and Permissions**

The security of ETRACS revolves Roles and Permissions. **Roles**
normally represents domain specific “role” such as Appraiser or
Assessor. **System Roles** are built-in and are provided as part of the
internal security setting. For more information on security, see *ETRACS
Security Model*.

The assignment of roles is normally performed by the System
Administrator. The main purpose of the task is to provide the **user**
with valid authorization and access into the system. Roles are
categorized or classified according to their function in the
organization.

| ROLE                  | DESCRIPTION                                                               |
|-----------------------|---------------------------------------------------------------------------|
| APPRAISAL\_CHIEF      | The role for Appraisal Division Chief or Head                             |
| APPRAISER             | The role for Appraiser                                                    |
| APPROVER              | The role for transaction Approver                                         |
| ASSESSOR              | The role for Assessor (City, Province or Municipal Assessor)              |
| ASSESSOR\_DATAMGMT    | The role for master data management                                       |
| ASSESSOR\_REPORT      | The role for generating assessor reports                                  |
| ASSESSOR\_SHARED      | A role that authorizes access to shared transactions or listings          |
| ASSISTANT\_ASSESSOR   | The role for Assistant Assessor                                           |
| CERTIFICATION\_ISSUER | The role given to certification issuer                                    |
| EXAMINER              | The role for Examiner                                                     |
| LANDTAX               | The role to land tax personnel that manages ledger data                   |
| LANDTAX\_DATAMGMT     | The role to land tax personnel that maintains land tax master data        |
| LANDTAX\_REPORT       | The role for generating land tax reports                                  |
| LANDTAX\_SHARED       | A role that authorizes access to shared land tax transactions or listings |
| MASTER                | The role for master data management                                       |
| RECOMMENDER           | The role for Recommending personnel (Municipal Assessor)                  |
| RECORD                | The role for Record section personnel                                     |
| RULE\_AUTHOR          | The role for Rule Authors                                                 |
| TAXMAPPER             | The role for Taxmapper                                                    |
| TAXMAPPER\_CHIEF      | The role for Taxmapping Chief or Head                                     |