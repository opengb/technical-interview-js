# OPEN Technologies Technical Interview

Thank you for your interest in OPEN technologies.

This technical challenge is intended to assess your abilities to gather functional requirements, assess propsed designs, and perform coding tasks in a situation similar to one you may encounter while working for OPEN.
There are three questions in the technical assessment, and we intend that they should take about two hours in total to complete.
This will be followed by an interview which will take about one hour during which you will have the opportunity to discuss your answers and receive feedback.

As an alternative, you may provide evidence of your abilities in any of these areas in the form of blog posts, publically available pull requests, conference talks, etc.
In the case of talks submitted in video format, please provide timestamps of the relevant portions of the video.
The relevant portions of video submissions should not exceed 15 minutes in length.

Your answers may be delivered in any format you choose, but please do not make your comments permanently available to anybody with access to this repository (for instance, by opening a pull request against it).
If you would like to deliver your code review in the form of a GitHub pull request, we suggest making a private fork of this repo.

## Question 1: Requirements gathering

Imagine you work at a company called Overt Technologies which probides a building emissions benchmarking product called GRIB.
GRIB is used to track utility bills and other data related to the energy efficiency of the building.
Users of GRIB pay a tiered subscription fee based on their service level, plus a premium on top of this based on the number of properties that they are tracking in the system.

One day you are asked to work on this ticket:

> GRIB-1234:
>
> We don't accurately track the number of properties our customers are tracking in GRIB.
> This means that we're losing money because we're not billing for as much as we're owed.

Before starting work on this ticket, what questions would you have about the requirements?
What aspects of the functional and operational requirements would you consider when designing a solution?
What questions would you have about the business context for the ticket?

### Alternative

Provide evidence of your ability to perform requirements analysis for technical features in the form of blog posts, conference talks, pull requests, etc.
In the case of talks submitted in video format, please provide timestamps of the relevant portions of the video.
The relevant portions of video submissions should not exceed 15 minutes in length.

## Question 2: Design review

The following solutions to GRIB-1234 are proposed by two junior developers working at Overt Technologies:

> *Solution A*
>
> Develop a new billing report service.
> Once per month, this service will execute a query against GRIB's database that counts the number of active properties per customer.
> This service will then create report of the active properties per customer and email it to Overt's billing department.

> *Solution B*
>
> Every time a property is created or deactivated in GRIB, write an event to a Kafka topic.
> Implement a billing service that reads all the events from the Kafak topic to keep a running total of the number of active properties per customer.
> The billing service can then be queried once per month in order to determine the number of active properties per cluster.
> A second service could be implemented to query the billing service once per month in order to create a report and email it to Overt's billing department.

What questions would you have when evaluating these two solutions?
What aspects of the functionality, scalability, business context and team context would you consider when chosing between them?

### Alternative

Provide evidence of your ability to perform technical design analysis in the form of blog posts, conference talks, pull requests, etc.
In the case of talks submitted in video format, please provide timestamps of the relevant portions of the video.
The relevant portions of video submissions should not exceed 15 minutes in length.

## Question 3: Code review

The file src/core.js contains an implementation of the top-k problem.
The algorithm is intended to provide an approximate count of the _k_ most frequent elements in a stream of unbounded length in a fixed memory footprint.
Please review the code in this file for correctness and style.
Approach the review as though this code was written by a junior developer near the beginning of their career as a proof of concept for a service that we intened to eventually provide to customers in production.

### Alternative

Provide evidence of your ability to perform code review in the form of blog posts, conference talks, pull requests, etc.
In the case of talks submitted in video format, please provide timestamps of the relevant portions of the video.
The relevant portions of video submissions should not exceed 15 minutes in length.
