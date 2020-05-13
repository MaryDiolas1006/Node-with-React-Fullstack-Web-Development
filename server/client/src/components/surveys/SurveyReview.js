import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'


const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key = {name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    });
    return (
        <div>
            <h5>Please confirm your entries</h5>
             {reviewFields}
            <button
             onClick = {() => submitSurvey(formValues, history)}
            className="yellow darken-3 white-text btn-flat" 
            onClick={onCancel} >
                back
            </button>
            <button className = "green btn-flat white-text right">
                Send Survey
                <i className ="material-icons right">Email</i>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions) (withRouter(SurveyReview));


