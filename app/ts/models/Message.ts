/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { User } from './User';
import { Thread } from './Thread';

export interface Message {
  id : string;
  sentAt : Date;
  isRead : boolean;
  author : User;
  text : string;
  thread : Thread;
}
