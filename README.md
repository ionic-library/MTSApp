Based on the Ionic Super Starter 🎮

# Navigation Menu

To add a page to the navigation menu, and make it navigable:

1.  Create necessary html template, component.ts and module for new page
2.  Add new page's title and related component name to the pages array in app/app.component.ts

Your page should now appear in the navigation menu, and be navigated to when clicked on.

## Add the navigation menu button to your page

To add the navigation menu button to your new page, simply add this to the header or nav element in your template html:

```
<button ion-button menuToggle icon-only>
    <ion-icon name='MTSApp-HamburgMenu'></ion-icon>
</button>
```
