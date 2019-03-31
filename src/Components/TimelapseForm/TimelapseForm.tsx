import React from 'react';

import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import {FormComponentProps} from "antd/es/form";


interface ITimelapseFormProps extends FormComponentProps {
}

class TimelapseFormImpl extends React.Component<ITimelapseFormProps> {
  public render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const { getFieldDecorator } = this.props.form;

    const timelapseDurationUnitSelector = getFieldDecorator('durationUnit', {
      initialValue: 'seconds',
    })(
      <Select>
        <Select.Option value="seconds">sec</Select.Option>
        <Select.Option value="minutes">min</Select.Option>
        <Select.Option value="hours">hr</Select.Option>
        <Select.Option value="days">day</Select.Option>
      </Select>
    );

    const recordingDurationUnitSelector = getFieldDecorator('recordingDurationUnit', {
      initialValue: 'minutes',
    })(
      <Select>
        <Select.Option value="seconds">sec</Select.Option>
        <Select.Option value="minutes">min</Select.Option>
        <Select.Option value="hours">hr</Select.Option>
        <Select.Option value="days">day</Select.Option>
      </Select>
    );

    const recordingIntervalUnitSelector = getFieldDecorator('recordingIntervalUnit', {
      initialValue: 'seconds',
    })(
      <Select>
        <Select.Option value="seconds">sec</Select.Option>
        <Select.Option value="minutes">min</Select.Option>
        <Select.Option value="hours">hr</Select.Option>
        <Select.Option value="days">day</Select.Option>
      </Select>
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label={"Timelapse duration"}>
          {getFieldDecorator('timelapseDuration', {
            rules: [{ required: false, message: 'Please input the expected timelapse length.' }],
          })(
            <Input addonAfter={timelapseDurationUnitSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>

        <Form.Item label={"Capture time"}>
          {getFieldDecorator('recordingDuration', {
            rules: [{ required: false, message: 'Please input the expected recording time.' }],
          })(
            <Input addonAfter={recordingDurationUnitSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>

        <Form.Item label={"FPS"}>
          {getFieldDecorator('fps', {
            rules: [{ required: false, message: 'Please input the expected fps.' }],
          })(
            <Input style={{ width: '100%' }}  />
          )}
        </Form.Item>

        <Form.Item label={"Number of frames"}>
          {getFieldDecorator('numFrames', {
            rules: [{ required: false, message: 'Please input the expected total number of frames.' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </Form.Item>

        <Form.Item label={"Capture Frame Interval"}>
          {getFieldDecorator('intervalSec', {
            rules: [{ required: false, message: 'Please input the expected frame interval.' }],
          })(
            <Input addonAfter={recordingIntervalUnitSelector} style={{ width: '100%' }}  />
          )}
        </Form.Item>
      </Form>
    );
  }

  handleSubmit = (event: React.FormEvent) => {
    const formTimelapseDuration = this.props.form.getFieldValue("timelapseDuration");
    const formTimelapseDurationUnit = this.props.form.getFieldValue("timelapseDurationUnit");
    const formRecordingDuration = this.props.form.getFieldValue("RecordingDuration");
    const formRecordingDurationUnit = this.props.form.getFieldValue("RecordingDurationUnit");
    const formFps = this.props.form.getFieldValue("fps");
    const formIntervalSec = this.props.form.getFieldValue("intervalSec");

    console.log(
      `
      formTimelapseDuration=${formTimelapseDuration}
      formTimelapseDurationUnit=${formTimelapseDurationUnit}
      formRecordingDuration=${formRecordingDuration}
      formRecordingDurationUnit=${formRecordingDurationUnit}
      formFps=${formFps}
      formIntervalSec=${formIntervalSec}
      `
    );
  }
}

const TimelapseForm = Form.create({ name: 'timelapse' })(TimelapseFormImpl);
export default TimelapseForm;