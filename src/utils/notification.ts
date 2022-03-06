export async function askForNotificationPermission() {
    if (!('Notification' in window)) {
        console.log("This browser does not support notifications.");
        return false
    } else {
        const permission = await Notification.requestPermission()
        return permission === 'granted'
    }
}

export function createNotification(title: string, options: NotificationOptions) {
    if (!window) {
        throw new Error('Notifications cannot run on the server!')
    }
    return new Notification(title, options)
}