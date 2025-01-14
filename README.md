> [!IMPORTANT]
> This repository contains the old version of the Gurubase Widget, which does not include the embeddable QA feature. It is no longer maintained. Please refer to the [new repository](https://github.com/Gurubase/gurubase-widget/) for the latest version.

This repository includes the script for the sticky 'Ask AI' widget, which you can add to your Guru link on your website.

![image](https://github.com/user-attachments/assets/7096bdce-ae6d-4b3e-8f41-f90bc7260975)


- Master branch is automatically deployed to https://guru-widget.pages.dev/guru_widget.latest.min.js
- When a new release is created, the new version is deployed to https://guru-widget.pages.dev/guru_widget.{version}.min.js (e.g. https://guru-widget.pages.dev/guru_widget.v1.0.0.min.js) but it is recommended to use the latest version instead
- The latest version is always the one on the master branch
- Master branch is protected and can only be updated through a pull request

## Example usage:

```html
<script src="https://guru-widget.pages.dev/guru_widget.latest.min.js" 
    data-text="Ask AI" 
    data-link="https://gurubase.io/g/anteon" 
    data-bg-color="#F6A61D" 
    data-icon-url="https://gurubase.io/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F75415501%3Fs%3D200%26v%3D4&w=96&q=75" 
    data-font-color="#000000" 
    data-margins='{"bottom": "1rem", "right": "1rem"}'>
</script>
```
## Default values
- text: "Ask AI"
- bg-color: "#F40003"
- font-color: "#000000"
- margins: {"bottom": "1rem", "right": "1rem"}

## Mandatory parameters
- data-link
- data-icon-url

