---
id: vantage_university_per_resource_costs
title: Vantage University Per Resource
description: Learn about resource reporting in this Vantage University section.
sidebar_label: Per Resource Costs
image: /img/vantage-university/per-resource-costs.jpg
keywords:
  - Vantage University
  - Active Resources
  - Resource Reports
---

# Per Resource Costs

## 💡 What Are Per Resource Costs?

Per resource costs refer to the expenses associated with individual cloud resources, including both direct costs and those incurred through network traffic. By analyzing data from Active Resources, Resource Reports, and Network Flow Reports, you can gain a detailed understanding of how each resource contributes to your overall cloud spending.

- **Active Resources** provide an overview of all active resources (e.g., and active virtual machine) and their associated costs.
- **Resource Reports** break down costs by specific resources, providing insights into cost distribution.
- **Network Flow Reports** analyze the costs of network traffic associated with your resources.

## 💭 Why Should I Use Them?

- **Comprehensive cost visibility:** Combining data from Active Resources, Resource Reports, and Network Flow Reports offers a complete picture of how each resource impacts your total expenses. This visibility helps in identifying major cost drivers and optimizing resource usage.
- **Optimization opportunities:** By pinpointing high-cost resources and inefficient network traffic, you can make informed decisions to optimize resource allocation and reduce unnecessary spending. Use rightsizing recommendations for EC2 instances and Kubernetes workloads to rightsize specific expensive resources.

## 📝 Resource Cost Use Cases

- As a **cloud architect**, you can use these tools to ensure that your cloud infrastructure is designed efficiently. By analyzing Active Resources and Resource Reports, you identify underutilized resources that could be downsized or terminated to save costs.
- As a **DevOps engineer** managing a complex application with multiple microservices, Network Flow Reports help you detect that high cross-AZ traffic between microservices is leading to increased costs. You can then focus on optimizing network configurations, such as reducing cross-AZ traffic or implementing VPC endpoints, to lower costs while maintaining application performance.

---

## 📚 Lesson 1: View Active Resources and Create Resource Reports

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://www.youtube.com/embed/gfCH5WRL_KA?si=4IN7I2sNz93JcdHR?si=cQiMpN38yl2rjHps?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}></iframe>
</div><br/>

## 📚 Lesson 2: Understanding Network Flow Reports

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://www.youtube.com/embed/MN7RNVo9nc4?si=cQiMpN38yl2rjHps?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}></iframe>
</div><br/>

## 📖 Additional Resources

- [View Active Resources](/active_resources)
- [Create Resource Reports](/active_resources#create-a-resource-report)
- [Understand Network Flow Reports](/network_flow_reports)