(function() {
    // Create a global namespace for our widget
    window.GuruWidget = {
        init: function(text, link, backgroundColor, iconUrl, fontColor, margins) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => createGuruWidget(text, link, backgroundColor, iconUrl, fontColor, margins));
            } else {
                createGuruWidget(text, link, backgroundColor, iconUrl, fontColor, margins);
            }
        }
    };

    function createGuruWidget(text, link, backgroundColor, iconUrl, fontColor = '#000000', margins = { bottom: '1rem', right: '1rem' }) {
        // Validate mandatory parameters
        if (!link || !iconUrl) {
            console.error('GuruWidget Error: Both link and iconUrl are required parameters');
            return;
        }

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
                ${margins.bottom ? `bottom: ${margins.bottom};` : ''}
                ${margins.top ? `top: ${margins.top};` : ''}
                ${margins.right ? `right: ${margins.right};` : ''}
                ${margins.left ? `left: ${margins.left};` : ''}
                width: 4.5rem;
                height: 5rem;
                border-radius: 0.3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                a {
                    text-decoration: none !important;
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
                font-size: 1rem;
                text-align: center;
                font-weight: 600;
                line-height: 1;
                font-family: 'Inter', sans-serif;;
            }
        `;
        document.head.appendChild(style);
    }

    // Auto-initialize when script loads
    const currentScript = document.currentScript || document.querySelector('script[src*="guru_widget.js"]');
    if (currentScript) {
        const text = currentScript.getAttribute('data-text') || 'Ask AI';
        const link = currentScript.getAttribute('data-link');
        const backgroundColor = currentScript.getAttribute('data-bg-color') || '#F40003';
        const iconUrl = currentScript.getAttribute('data-icon-url');
        const fontColor = currentScript.getAttribute('data-font-color') || '#ffffff';
        
        let margins = { bottom: '1rem', right: '1rem' }; // default margins
        const marginAttr = currentScript.getAttribute('data-margins');
        if (marginAttr) {
            try {
                const customMargins = JSON.parse(marginAttr);
                margins = { ...margins, ...customMargins };
            } catch (e) {
                console.error('GuruWidget Error: Invalid margins JSON format');
            }
        }
        
        if (!link || !iconUrl) {
            console.error('GuruWidget Error: data-link and data-icon-url attributes are required');
        } else {
            window.GuruWidget.init(text, link, backgroundColor, iconUrl, fontColor, margins);
        }
    }
})();