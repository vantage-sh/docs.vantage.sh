# Annotations
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Annotation Views" width="80%" src="/img/annotation-view.png" />
</div>

Annotations are used in [cost reports](/cost_reports/) to enable users to add context to cost reports on a given date. The annotation consists of a date and a comment. This is particularly useful for describing the infrastructure or cost event that took place on that date.

## Add an Annotation
Annotations can be added from either the annotation sidebar or the cost report graph. 

### Add From the Annotation Sidebar
To add an annotation from the annotation sidebar start by clicking the annotation icon at the top right of the screen to open the sidebar. You can then click the New button on the top right of the annotation sidebar. Once the form appears select a date using the date picker and write your message in the paragraph field. Submit the annotation by clicking the arrow icon at the bottom right of the annotation.

### Add From the Cost Report Graph
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Add Annotation From Graph" width="80%" src="/img/annotation-add-graph.gif" />
</div>

To add an annotation from graph click on the date you would like to annotate. Once the form appears write your message in the paragraph field. Submit the annotation by clicking the arrow icon at the bottom right of the annotation.

### View Annotations

Annotations can be viewed in the annotation sidebar. They are displayed with the most recently added at the top of the list. Also, vertical lines are shown on the report graph show dates with corresponding annotations. 

### Edit an Annotation

Need to add more information to an annotation or fix a spelling mistake? You can edit your annotation by clicking the three dots at the top right of your annotation then selecting the edit option. You can select a new date from the date picker and/or edit the text in the paragraph field. Save your changes by clicking the arrow icon at the bottom right of the annotation. 

## Delete an Annotation

You are able to delete your annotations by clicking the three dots at the top right of your annotation then select the Remove option. Note that you are also able to resolve annotations and that may be the better solution.

## Resolved Annotations

### Resolve/Unresolve an Annotation

To resolve an annotation click the three dots at the top right of your annotation and click the Mark as Resolved option. To unresolve an annotation repeat the previous steps but select the Unresolved option.

### View Resolved Annotations
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resolved Annotation" width="40%" src="/img/annotation-view-resolved.png" />
</div>

Cost reports are by default filtered to hide resolved annotations from the annotations list and the graph. To view resolved annotations simply open the annotation sidebar by clicking the annotation icon at the top right of the screen. Then click the filter icon at the top right of the annotation sidebar and click Show Resolved. Resolved annotations will now show in both views.

## Share Annotations

To share annotations with a teammate click the three dots at the top right of your annotation then clicking the Copy Link option. You’ll then have a link to your annotations that you can send to your teammates. 

## Corresponding Issues

When an annotation is created a corresponding [issue](https://www.vantage.sh/features/issues) is automatically created. You can navigate to the corresponding issue by clicking the three dots at the top right of your annotation then clicking the Go to Issue option.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Annotation Issues" width="80%" src="/img/annotation-issues.png" />
</div>

The issue is automatically created with the Annotation label and a link to the annotated report. The title will default to the report name and annotations date. You can use the issue to comment on the annotation. 

When an annotation is resolved the corresponding issue will become a closed issue. Unresolving an issue reopens the corresponding issue.