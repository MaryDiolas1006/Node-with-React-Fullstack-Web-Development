import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';



class SurveyNew extends React.Component {
    state = {formReview: false}
 
    renderContent(){
        if(this.state.formReview) {
            return <SurveyReview onCancel = {() => this.setState({formReview: false})}/>
        }
        return <SurveyForm onSurveySubmit = {() => this.setState({formReview: true})} />
    }

    render() {
        return (
            <div>
            {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew);