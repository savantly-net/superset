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
import { shallow } from 'enzyme';
import { SuperChart } from '@superset-ui/core';

import ChartRenderer from 'src/components/Chart/ChartRenderer';

const requiredProps = {
  chartId: 1,
  datasource: {},
  formData: {},
  vizType: 'foo',
};

describe('ChartRenderer', () => {
  it('should render SuperChart', () => {
    const wrapper = shallow(
      <ChartRenderer {...requiredProps} refreshOverlayVisible={false} />,
    );
    expect(wrapper.find(SuperChart)).toExist();
  });

  it('should not render SuperChart when refreshOverlayVisible is true', () => {
    const wrapper = shallow(
      <ChartRenderer {...requiredProps} refreshOverlayVisible />,
    );
    expect(wrapper.find(SuperChart)).not.toExist();
  });
});
