import { logEvent } from '@firebase/analytics';
import { analytics } from '../firebase';

export const gAnalytics = {
    onSubscribeInputClick: () => logEvent(analytics, 'subscribe_input_clicked'),
    onSubscribeBtnClick: () => logEvent(analytics, 'subscribe_button_clicked'),
    onSubrcibedSucessfully: () => logEvent(analytics, 'subscribed_success'),
    onSubrciptionFail: () => logEvent(analytics, 'subscribed_failure'),
    onSurveyButtonClicked: (isConfirmed) =>
        logEvent(analytics, 'survey_modal_button_clicked', {
            clickAction: isConfirmed ? 'agreed' : 'cancelled',
        }),
    onSurveyPageLoad: () => logEvent(analytics, 'survey_page_load'),
};
