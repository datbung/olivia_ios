import { Injectable } from "@angular/core";

declare var Idfa;
declare var cordova;

@Injectable()
export class IDFAService {
    public getIdfa(): Promise<any> {
        return new Promise((resolve, reject) => {
            Idfa = cordova.plugins.idfa;
            Idfa.getInfo().then((info) => {
                if (!info.limitAdTracking) {
                    console.log(info.idfa || info.aaid);
                    resolve(info.idfa || info.aaid);
                } else if (info.trackingPermission === Idfa.TRACKING_PERMISSION_NOT_DETERMINED) {
                  return Idfa.requestPermission().then(result => {
                      if (result === Idfa.TRACKING_PERMISSION_AUTHORIZED) {
                          return Idfa.getInfo().then(info => {
                            resolve(info.idfa || info.aaid);
                          });
                      }
                  });
              }
            });
        });
    }
}