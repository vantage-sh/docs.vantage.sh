# Setup

## Connecting Your Azure Account

Vantage integrates with your Azure account through the use of a Active Directory [Service Principal](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal). This principal is then assigned access to either [management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview) or individual [subscriptions](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions). Any subscriptions that are part of a resource group will be automatically imported.

## Read-Only by Default

The service principal is granted [Reader](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) permissions. It does not have permissions nor will ever attempt to make any changes to your infrastructure. 

## Creating an Azure Service Principal

```bash
az ad sp create-for-rbac -n "vantage"
```

This will output the following:

```bash
{
  "appId": "2d218f0f5-7ad5-4a12-abc7-bad2889d6407",
  "displayName": "vantage",
  "password": "8zkj3~yswKd433U12SHrvp22UoA6tOOOkZ_BYar2",
  "tenant": "1050a480-ef60-43d7-b8db-224aad100b60"
}
```

Record the appId, tenant and password as you will enter these into the Vantage console.

## Granting the Service Prinipal Permissions

Grant Permissions to the 'appId' from the service pricinpal created above. The scope can be a subscription or management group.

```bash
az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \ 
  --role Reader \ 
  --scope "/providers/Microsoft.Management/managementGroups/<MANGEMENT_GROUP_NAME>"
```

## Save the Credentials in Vantage

Visit the [integrations page](https://console.vantage.sh/settings/integrations) and add an Azure Integration.

![Azure Connection](/img/azure_connection.png)
