# 📸 Guide Rapide : Extraction des Images du PDF

## Méthode la Plus Simple (Recommandée)

### Étape 1 : Utiliser un Convertisseur en Ligne

1. Allez sur **https://www.ilovepdf.com/fr/pdf_en_jpg**
2. Cliquez sur "Sélectionner un fichier PDF"
3. Choisissez le fichier `Dossier nov 2025 - Le Monde de Gabriel - Opéra POP - Meet Mercy Production-2.pdf`
4. Sélectionnez "Convertir pages en images"
5. Cliquez sur "Convertir en JPG"
6. Téléchargez le fichier ZIP avec toutes les images

### Étape 2 : Renommer et Placer les Images

Une fois les images extraites, renommez-les selon ce tableau :

| Page PDF | Image à extraire | Nouveau nom | Destination |
|----------|------------------|-------------|-------------|
| **Page 1** | Image principale avec casiers et porte | `hero-main.jpg` | `images/` |
| **Page 14** | Affiche Moulin Rouge | `moulin-rouge.jpg` | `images/` |
| **Page 14** | Affiche Grease | `grease.jpg` | `images/` |
| **Page 14** | Affiche West Side Story | `west-side-story.jpg` | `images/` |
| **Page 14** | Affiche Le Cercle des Poètes Disparus | `cercle-poetes.jpg` | `images/` |
| **Page 14** | Affiche Cyrano de Bergerac | `cyrano.jpg` | `images/` |
| **Page 14** | Affiche Star Wars | `star-wars.jpg` | `images/` |
| **Page 14** | Affiche Suzume | `suzume.jpg` | `images/` |
| **Page 14** | Affiche Your Name | `your-name.jpg` | `images/` |
| **Page 14** | Affiche One Piece Red | `one-piece-red.jpg` | `images/` |
| **Page 19** | Visuel "Si je dis STOP tu fais pas" | `stop-single.jpg` | `images/` |
| **Dernière page** | Logo Meet Mercy Production (papillon) | `logo-meet-mercy.png` | `images/` |
| **Dernière page** | Logo Stop Harcèlement Flow | `logo-stop-harcelement.png` | `images/` |

### Étape 3 : Vérifier

Une fois terminé, votre dossier `images/` devrait contenir :

```
images/
├── hero-main.jpg
├── moulin-rouge.jpg
├── grease.jpg
├── west-side-story.jpg
├── cercle-poetes.jpg
├── cyrano.jpg
├── star-wars.jpg
├── suzume.jpg
├── your-name.jpg
├── one-piece-red.jpg
├── stop-single.jpg
├── logo-meet-mercy.png
└── logo-stop-harcelement.png
```

## Alternative : Extraction Manuelle avec Adobe

Si vous avez Adobe Acrobat Reader :

1. Ouvrez le PDF
2. Clic droit sur chaque image → "Copier l'image"
3. Ouvrez Paint (Windows) ou Aperçu (Mac)
4. Coller (Ctrl+V / Cmd+V)
5. Enregistrer avec le bon nom dans le dossier `images/`

## Alternative : Capture d'écran (Dernier recours)

1. Ouvrez le PDF en plein écran
2. Zoomez sur l'image désirée
3. Utilisez l'outil de capture d'écran :
   - **Windows** : Win + Shift + S
   - **Mac** : Cmd + Shift + 4
4. Enregistrez dans le dossier `images/` avec le bon nom

## ⚠️ Important

- Les images doivent être au format **JPG** (sauf les logos en PNG)
- Utilisez des **minuscules** pour les noms de fichiers
- Pas d'espaces dans les noms, utilisez des tirets `-`
- Les images seront automatiquement redimensionnées par le CSS

## ✅ Test

Pour vérifier que tout fonctionne :

1. Ouvrez `index.html` dans votre navigateur
2. Rafraîchissez la page (F5)
3. Toutes les images devraient s'afficher correctement

## 🆘 Besoin d'Aide ?

Si vous rencontrez des problèmes :
- Vérifiez que les noms de fichiers correspondent exactement
- Vérifiez que les images sont bien dans le dossier `images/`
- Essayez de rafraîchir votre navigateur (Ctrl+F5)

---

Une fois les images ajoutées, votre site sera 100% complet ! 🎉