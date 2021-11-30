import { ClassesDemos } from './classes';
import { FunctionDemos } from './functions';
import { GenericsDemos } from './generics';
import { InterfacesDemos } from './interfaces';
import { ObjectDemos } from './objects';
import { TypesDemos } from './types';
import { ServicesDemos } from './services';
import { ModulesDemos } from './modules';

import * as $ from 'jquery';
import { RxJSDemos } from './rxjs';

//export method to global namespace - otherwise is is not available for function call

(<any>window).loadIt = loadContent;

export function loadContent(page) {
    let path = './src/' + page;
    $.ajax({
        type: 'GET',
        url: path,
        contentType: 'application/json; charset=utf-8',
        dataType: 'text',
        success: function (data) {
            if (data != null) {
                $('#workbench').empty();
                $('#workbench').html(path);
            }
        },
        error: function (msg) {
            console.log(msg.responseText);
        },
    });
}

//Exposing Class to GlobalNamespace
export class Loader {
    load(page) {
        let path = './src/' + page;
        $.ajax({
            type: 'GET',
            url: path,
            contentType: 'application/json; charset=utf-8',
            dataType: 'text',
            success: function (data) {
                if (data != null) {
                    $('#workbench').empty();
                    $('#workbench').html(data);
                }
            },
            error: function (msg) {
                console.log(msg.responseText);
            },
        });
    }
}

//exporting an object
(<any>window).loader = new Loader();

//Using export from webpack.config.js
class Demos {
    types = new TypesDemos();
    classes = new ClassesDemos();
    functions = new FunctionDemos();
    interfaces = new InterfacesDemos();
    generics = new GenericsDemos();
    objects = new ObjectDemos();
    services = new ServicesDemos();
    modules = new ModulesDemos();
    rxjs = new RxJSDemos();
}

export var demo = new Demos();
