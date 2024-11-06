- Master branch is automatically deployed to https://guru-widget.pages.dev/guru_widget.latest.min.js
- When a new release is created, the new version is deployed to https://guru-widget.pages.dev/guru_widget.{version}.min.js (e.g. https://guru-widget.pages.dev/guru_widget.v1.0.0.min.js) but it recommneds to use the latest version instead
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
    data-margins='{"top": "1rem", "right": "1rem"}'>
</script>
```
## Default values
- text: "Ask AI"
- bg-color: "#F40003"
- font-color: "#000000"
- margins: {"top": "1rem", "right": "1rem"}

## Mandatory parameters
- data-link
- data-icon-url

