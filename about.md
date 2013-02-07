# Unvollständige Adressen in OSM

[Diese Karte](./) zeigt unvollständige Adressen in [Openstreetmap](http://osm.org). Objekte werden angezeigt, wenn Eine Hausnummer vorhanden ist, aber keine Straße, Postleitzahl oder Stadt. Adressen bei denen die Straße fehlt, werden mit einem roten Pin gekennzeichnet. Zur besseren Übersicht kann die Option aktiviert werden, dass nur Objekte mit fehlenden addr:street Tags angezeigt werden.

Da es vorallem in Städten sehr viele Treffer gibt, habe ich das herauszoomen begrenzt, da es sonst passieren kann, dass so viele Pins angezeigt werden, dass Browser abstürzen. Bei der aktiviertem _Nur fehlendes addr:street anzeigen_ kann zwei mal weiter herausgezoomt werden und weiterhin neue Daten geladen werden. 

## Relationen
Relationen mit fehlenden Hausnummern werden momentan nicht angezeigt. Sorry.

## addr:conutry

Fehlende _addr:country_ werden zwar in der Info-Blase mit angezeigt, sind aber kein Grund, dass eine sonst vollständige Adresse auf der Karte angezeigt wird. Das hat einfach den Grund, dass _addr:country_ noch seltener verwendet wird, und damit die Karte noch schneller zum Absturz bringen würde. Bei Bedarf, kann ich die Funktion aber noch hinzufügen.

## Hää?

So trägt man [Adressen in Openstreetmap](http://wiki.openstreetmap.org/wiki/DE:Key:addr) ein.

## Wer hat das Verbrochen?

Ich bin User [ubahnverleih](http://openstreetmap.org/user/ubahnverleih). Falls es Wünsche oder Beschwerden gibt schreibt mir einfach ne Nachricht über OSM.

## Wie hat er das gemacht?

Mit [leaflet](http://leafletjs.com/) und der Wunderbaren [Overpass API](http://overpass-api.de/)

## Warum hat er das gemacht?

Weil man mit besseren Adressen besseres Geocoding machen kann. Und überhaupt.

## Fallen dir noch mehr sinnlose Fragen für Überschriften ein?

Leider nicht.