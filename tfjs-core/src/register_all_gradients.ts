/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// TODO(yassogba) update this gradient to the new convention
import './square_grad';

// Import Grad Configs here.
import {squaredDifferenceGradConfig} from './gradients/SquaredDifference_grad';
import {GradConfig} from './kernel_registry';
import {registerGradient} from './kernel_registry';

// Export all kernel configs here so that the package can auto register them
const gradConfigs: GradConfig[] = [
  squaredDifferenceGradConfig,
];

for (const gradientConfig of gradConfigs) {
  registerGradient(gradientConfig);
}
