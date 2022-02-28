import { discloseBlue, discloseBlueArrow, discloseGreen, discloseGreenArrow, disclosePurple, disclosePurpleArrow } from '../../styles/classes'
import NotificationPanel from './notification-panel'
import { AnnouncementItems, CTItems, LabItems } from './item'


const Notifications: React.FC = () => {
    return (
        <div className="w-full pt-4">
            <div className="w-full max-w-xl lg:max-w-4xl p-2 mx-auto rounded- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <NotificationPanel color={disclosePurple} arrowColor={disclosePurpleArrow} title='Notifications'>
                    <AnnouncementItems />
                </NotificationPanel>
                <NotificationPanel color={discloseBlue} arrowColor={discloseBlueArrow} title='Class Tests'>
                    <CTItems />
                </NotificationPanel>
                <NotificationPanel color={discloseGreen} arrowColor={discloseGreenArrow} title='Lab Reports'>
                    <LabItems />
                </NotificationPanel>
            </div>
        </div>
    )
}

export default Notifications




