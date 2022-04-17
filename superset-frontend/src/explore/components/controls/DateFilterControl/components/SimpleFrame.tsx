/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 import React from 'react';
 import { t } from '@superset-ui/core';
 import { Moment } from 'moment';
 import { Col, Row } from 'src/components';
 import { RangePicker } from 'src/components/DatePicker';
 import { InfoTooltipWithTrigger } from '@superset-ui/chart-controls';
 import {
   MOMENT_FORMAT,
   dttmToMoment,
   simpleTimeRangeEncode,
   simpleTimeRangeDecode,
 } from 'src/explore/components/controls/DateFilterControl/utils';
 import {
   FrameComponentProps,
 } from 'src/explore/components/controls/DateFilterControl/types';
 
 export function SimpleFrame(props: FrameComponentProps) {
   const { simpleRange, matchedFlag } = simpleTimeRangeDecode(props.value);
   if (!matchedFlag) {
     props.onChange(simpleTimeRangeEncode(simpleRange));
   }
   const {
     sinceDatetime,
     untilDatetime,
   } = { ...simpleRange };
 
   function onChange(values: [Moment, Moment], formatString: [string, string]) {
     props.onChange(
       simpleTimeRangeEncode({
         ...simpleRange,
         sinceDatetime: values[0].format(MOMENT_FORMAT),
         untilDatetime: values[1].format(MOMENT_FORMAT),
       }),
     );
   }
 
   return (
     <div data-test="simple-frame">
       <div className="section-title">{t('Configure simple time range')}</div>
       <Row gutter={24}>
         <Col span={12}>
           <div className="control-label">
             {t('START (INCLUSIVE)')}{' '}
             <InfoTooltipWithTrigger
               tooltip={t('Start date included in time range')}
               placement="right"
             />
           </div>
         </Col>
         <Col span={12}>
           <div className="control-label">
             {t('END (EXCLUSIVE)')}{' '}
             <InfoTooltipWithTrigger
               tooltip={t('End date excluded from time range')}
               placement="right"
             />
           </div>
         </Col>
       </Row>
       <Row gutter={24}>
         <Col span={24}>
           <RangePicker 
            showTime={false}
             defaultValue={[dttmToMoment(sinceDatetime), dttmToMoment(untilDatetime)]}
             onChange={onChange}
             allowClear={false}
           />
         </Col>
       </Row>
     </div>
   );
 }
 