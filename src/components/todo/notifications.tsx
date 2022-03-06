import dynamic from 'next/dynamic'

import { discloseBlue, discloseBlueArrow, discloseGreen, discloseGreenArrow, disclosePurple, disclosePurpleArrow } from '../../styles/classes'
import { useCount } from './context'
import { Button } from './disclosure-button'
import NotificationPanel from './notification-panel'

const AnnouncementItems = dynamic(() =>
    import('./item').then(m => m.AnnouncementItems as any)
)
const CTItems = dynamic(() =>
    import('./item').then(m => m.CTItems as any)
)
const LabItems = dynamic(() =>
    import('./item').then(m => m.LabItems as any)
)


const Notifications: React.FC = () => {
    const { ct, lab } = useCount()
    return (
        <div className="w-full pt-4">
            <div className="w-full max-w-xl lg:max-w-4xl p-2 mx-auto rounded- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <NotificationPanel button={<Button title='Announcements' />} color={disclosePurple} arrowColor={disclosePurpleArrow}>
                    <AnnouncementItems />
                </NotificationPanel>
                <NotificationPanel button={<Button title='Class Tests' count={ct} />} color={discloseBlue} arrowColor={discloseBlueArrow}>
                    <CTItems />
                </NotificationPanel>
                <NotificationPanel button={<Button title='Lab Reports' count={lab} />} color={discloseGreen} arrowColor={discloseGreenArrow}>
                    <LabItems />
                </NotificationPanel>
            </div>
        </div>
    )
}

export default Notifications




