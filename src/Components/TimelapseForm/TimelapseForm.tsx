import React from 'react';

import { Form, Input, Select, Button } from 'antd';
import { FormComponentProps } from "antd/es/form";

const moment = require('moment');

interface ITimelapseFormProps extends FormComponentProps {
}

class TimelapseFormImpl extends React.Component<ITimelapseFormProps> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    const timelapseDurationUnitSelector = getFieldDecorator('timelapseDurationUnit', {
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
      <Form labelCol={{ span: 9 }} wrapperCol={{ span:13 }} onChange={this.handleChange} onSubmit={this.handleChange}>
        <Form.Item label={"Video Duration"}>
          {getFieldDecorator('timelapseDuration', {
            initialValue: 10,
            rules: [{ required: false, message: 'Please input the expected timelapse length.' }],
          })(
            <Input autoFocus={true} addonAfter={timelapseDurationUnitSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>

        <Form.Item label={"Capture Duration"}>
          {getFieldDecorator('recordingDuration', {
            initialValue: 30,
            rules: [{ required: false, message: 'Please input the expected recording time.' }],
          })(
            <Input addonAfter={recordingDurationUnitSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>

        <Form.Item label={"Frames / sec"}>
          {getFieldDecorator('fps', {
            initialValue: 30,
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

        <Form.Item label={"Capture Interval"}>
          {getFieldDecorator('intervalSec', {
            initialValue: 6,
            rules: [{ required: false, message: 'Please input the expected frame interval.' }],
          })(
            <Input addonAfter={recordingIntervalUnitSelector} style={{ width: '100%' }}  />
          )}
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 24, offset: 0 }}
        >
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    );
  }

  handleChange = (event: React.FormEvent) => {
    event.preventDefault();

    const formTimelapseDuration = this.props.form.getFieldValue("timelapseDuration") as number;
    const formTimelapseDurationUnit = this.props.form.getFieldValue("timelapseDurationUnit");
    const formRecordingDuration = this.props.form.getFieldValue("recordingDuration") as number;
    const formRecordingDurationUnit = this.props.form.getFieldValue("recordingDurationUnit");
    const formFps = this.props.form.getFieldValue("fps") as number;
    const formNumFrames = this.props.form.getFieldValue("numFrames") as number;
    const formIntervalSec = this.props.form.getFieldValue("intervalSec") as number;

    console.log(
      `
      formTimelapseDuration=${formTimelapseDuration}
      formTimelapseDurationUnit=${formTimelapseDurationUnit}
      formRecordingDuration=${formRecordingDuration}
      formRecordingDurationUnit=${formRecordingDurationUnit}
      formFps=${formFps}
      formNumFrames=${formNumFrames}
      formIntervalSec=${formIntervalSec}
      `
    );

    const formTimelapseDurationSec = moment.duration(formTimelapseDuration, formTimelapseDurationUnit).as("seconds");
    const newNumFrames = formFps * formTimelapseDurationSec;

    const newRecordingDurationSec = newNumFrames * formIntervalSec;
    const newRecordingDuration = moment.duration(newRecordingDurationSec, "seconds").as(formRecordingDurationUnit);

    console.log(
      `
      newNumFrames=${newNumFrames}
      newRecordingDurationSec=${newRecordingDurationSec}
      newRecordingDuration=${newRecordingDuration}
      `
    );

  }
}

const TimelapseForm = Form.create({ name: 'timelapse' })(TimelapseFormImpl);
export default TimelapseForm;