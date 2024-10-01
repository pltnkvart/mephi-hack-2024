import { ToasterContextMethods } from '@gravity-ui/uikit';

export function addNotification(
    add: ToasterContextMethods['add'],
    success: boolean,
    title?: string,
    content?: string,
) {
    add({
        name: 'preset-feedback',
        title: title,
        theme: success ? 'success' : 'danger',
        content: content,
    });
}