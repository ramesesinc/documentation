# Business Permit and Licensing
## Overview

The BPL Module automatically calculates the taxes, fees and charges when
applying for new or renewing a business. The output for this module is
the issuance of the business permit. ETRACS controls all aspects of the
process like the ability to block issuance of permits when the proper
fees and taxes are not paid. The following are the major activities for
this module:

1.  Application for New Permit or Renewal

2.  Business assessment

3.  Payment of taxes, fees and charges

4.  Issuance of business permit

### Features 

ETRACS is a project continuously improved with innovation. Many
additions are added in version 2.5 to make business assessments much
smarter. The following are the highlights of the new system:

1.  Support for BIN – The Business Index No is a unique identifier for
    the business. It is also unique across all other ETRACS
    implementations. This is in preparation for usage in the cloud.

2.  Barcode Support – this is a time saver for searching documents and
    especially useful for business collections.

3.  Workflow – the internal workflow creates tasks and logs the time
    when the task was completed. Information like how long a certain
    step was processed, the status of the document and who to follow up
    can be derived. This is useful in supporting the ARTA (anti-red tape
    act).

4.  Support for Unified Form – To comply with DTI requirements, the
    unified form information and gender sensitivity is supported.

5.  Paperless Transactions – the goal of the system is eventually to go
    paperless, so the workflow was designed to allow an LGU to capture
    imimagestely the information through interview without filling up
    paper forms. The application form will be printed after the last
    step so everything will be final and erasures will be eliminated.

6.  Better security – the system controls who can edit the system. Data
    from the business information cannot be edited by the assessors and
    vice versa. Only the person starting the task can update it, for
    example if an assessment done by assessor A was sent back by the
    approver for reassessment, only assessor A can edit otherwise it has
    to be reassigned if assessor A is not available.

7.  Rich Support for Business Location – before the address was entered
    in plain text. But because the address, or business location plays
    an important role in assessments, the system improved support for
    specifying addresses. This includes support for asking more
    information if address is rented and the ability to match lessors
    and knowing businesses renting in their building.

### Roles and Permissions

The following roles are needed for this module:

DOMAIN: BPLS

| ROLE         | DESCRIPTION                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| BUSINESSINFO | The role for Business Information. In charge of accepting applications                    |
| ASSESSOR     | The role for Assessor                                                                     |
| APPROVER     | The role for Approvers. Approvers are in charge of forwarding the application for payment |
| LICENSING    | The role that issues permits and licenses                                                 |
| MASTER       | Support role for business in charge of managing master files                              |
| RULE\_AUTHOR | In charge of creating all rules for business                                              |
| SHARED       | Allows viewing of the applications and master business list.                              |