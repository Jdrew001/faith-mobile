import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { catchError, tap, finalize } from 'rxjs/operators';
import { throwError, EMPTY } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../loader/loader.service';
import { CoreConstants } from '../CoreConstants';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService, private toastController: ToastController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        const timeout = this.createTimeout();
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loaderService.toggleLoader(false);
                }
                return EMPTY;
            }),
            catchError((error) => {
                return this.handleError(error);
            }),
            finalize(() => {
                clearTimeout(timeout);
            })
        );
    }

    private handleError(error: HttpErrorResponse) {
        this.loaderService.toggleLoader(false);
        this.presentToast(error.error);
        return throwError(error);
    }

    private createTimeout() {
        return setTimeout(() => {
            this.loaderService.toggleLoader(true);
        }, CoreConstants.LOAD_TIME);
    }

    private presentToast(msg) {
        this.toastController.create({
            message: msg,
            duration: 20000,
            color: 'danger'
        }).then(val => val.present());
    }
}