// Copyright 2012 Selenium committers
// Copyright 2012 Software Freedom Conservancy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview The main user facing module. Exports WebDriver's primary
 * public API and provides convenience assessors to certain sub-modules.
 */

var base = require('./_base');

exports.ActionSequence = base.require('webdriver.ActionSequence');
exports.Builder = base.require('node.Builder');
exports.Button = base.require('webdriver.Button');
exports.By = base.require('webdriver.Locator.Strategy');
exports.Command = base.require('webdriver.Command');
exports.CommandName = base.require('webdriver.CommandName');
exports.EventEmitter = base.require('webdriver.EventEmitter');
exports.Session = base.require('webdriver.Session');
exports.WebDriver = base.require('webdriver.WebDriver');
exports.WebElement = base.require('webdriver.WebElement');

exports.__defineGetter__('Key', function() {
  return base.require('webdriver.Key');
});


var submodules = {
  command: {
    Command: base.require('webdriver.Command'),
    CommandName: base.require('webdriver.CommandName')
  },
  error: {
    Error: base.require('bot.Error'),
    ErrorCode: base.require('bot.ErrorCode')
  },
  events: {
    EventEmitter: base.require('webdriver.EventEmitter')
  },
  http: {
    Executor: base.require('webdriver.http.Executor'),
    Request: base.require('webdriver.http.Request'),
    Response: base.require('webdriver.http.Response'),
    HttpClient: base.require('node.http.HttpClient'),
    util: base.require('node.http.util')
  },
  promise: base.exportPublicApi('webdriver.promise'),
  stacktrace: base.exportPublicApi('webdriver.stacktrace')
};


Object.keys(submodules).forEach(function(key) {
  exports.__defineGetter__(key, function() {
    return submodules[key];
  });
});

