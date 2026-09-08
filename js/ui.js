export const renderMessage = (elementId, message) => {
    const container = document.getElementById(elementId);
    if (container) {
        container.innerHTML += `<p>${message}</p>`;
    }
};