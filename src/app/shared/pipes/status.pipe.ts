import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusing'})
export class StatusPipe implements PipeTransform {
    transform(status: number): string {
        var statussen = ["open", "gesloten", "privé"];
        return statussen[status];
    }
}
