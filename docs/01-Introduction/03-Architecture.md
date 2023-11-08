## Architecture

Osiris 2 Enterprise Framework is a multi-tiered framework that is
composed of several layers intended to be scalable and dynamic.
Basically it is composed of three tiers – the client or presentation,
the business application or middle layer and the database layer. See
diagram below:

![image|512x397,100%](images\image2.png)

<!-- <img src="images\image2.png" style="width:4.83333in;height:3.66667in" /> -->

Figure 2. E-TRACS Enterprise Architecture

**<u>Client or Presentation Layer</u>** – this is what users use to
interact with the system. It could be any computing device. It can be a
desktop or workstation application, a web browser, a mobile application,
a kiosk, or any device like card readers. The E-TRACS program, however,
at this time is developed for the personal computer and uses the *Osiris
2 Client Platform*.   

**<u>Business Application Layer</u>** – Also known as a middle layer,
data collected from the client is processed. It acts as the go-between
the client and data layer. Transactions are organized as services, and
code is written in scripts or a text-like programming language. Services
can be accessed by the client or even by another system using another
programming language. This is commonly referred to as Service Oriented
Architecture (SOA). 

**<u>Data Layer</u>**   - This is where data will be persisted or
“saved” and commonly stored in relational databases. However, data
storage is not limited to relational databases. Data can be also be
stored in other data formats like a document database and non-relational
databases. However, at this time, E-TRACS is stored in relational
databases, and an LGU has two options – MySQL or MS SQL Server. There is
planned support for other databases in the future but it depends on the
request of the LGU.  
