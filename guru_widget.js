(function() {
    function createGuruWidget(text, link, backgroundColor, iconUrl, fontColor = '#000000') {
        const widget = document.createElement('a');
        widget.className = 'widget-container';
        widget.href = link;
        widget.target = '_blank';
        widget.style.backgroundColor = backgroundColor;
        widget.style.color = fontColor;
        widget.style.fontFamily = `Inter, sans-serif`;

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'widget-icon-wrapper';
        
        const icon = document.createElement('img');
        icon.className = 'widget-icon';
        icon.src = iconUrl;
        icon.alt = text;

        iconWrapper.appendChild(icon);
        widget.appendChild(iconWrapper);

        const widgetText = document.createElement('div');
        widgetText.className = 'widget-text';
        widgetText.textContent = text;

        widget.appendChild(widgetText);

        document.body.appendChild(widget);

        const style = document.createElement('style');
        style.textContent = `
            .widget-container {
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                width: 4.5rem;
                height: 5rem;
                border-radius: 0.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                a {
                    text-decoration: none;
                }
            }
            .widget-icon-wrapper {
                background-color: white;
                padding: 0.1rem;
                border-radius: 50%;
                margin-bottom: 0.5rem;
            }
            .widget-icon {
                width: 1.9rem;
                height: 1.9rem;
                object-fit: cover;
                border-radius: 50%;
                display: block;
            }
            .widget-text {
                font-size: 0.9rem;
                text-align: center;
                font-weight: 600;
                line-height: 1;
                font-family: 'Inter', sans-serif;;
            }
        `;
        document.head.appendChild(style);
    }

    // Expose the function to the global scope
    window.createGuruWidget = createGuruWidget;
})();