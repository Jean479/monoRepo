import { inject, Injectable, Pipe, PipeTransform } from "@angular/core";
import { Translation, TranslocoLoader, TranslocoPipe } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe extends TranslocoPipe implements PipeTransform  {}

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {

    private http = inject(HttpClient);

    getTranslation(lang: string) {
      return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }

}
