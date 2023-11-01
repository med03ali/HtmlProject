export const Formcv = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-5 mb-5'>Formulaire CV</h1>
            <p>Veuillez remplir le formulaire ci-dessous avec les informations demandées</p>
            <div className='mt-5 mb-5'>
                
                <form>
                    <fieldset>
                        <label className='text-xl  mt-5 mb-5'>Entrez votre prénom: <br></br><input id="prenom" name="prenom" type="text" placeholder="Prenom" pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+" title="Le prenom doit commencer par une majuscule et ne doit contenir que des lettres." required /></label><br></br>
                        <label className='text-xl  mt-5 mb-5'>Entrez votre nom: <br></br><input id="nom" name="nom" type="text" placeholder="Nom" pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+" title="Le nom doit commencer par une majuscule et ne doit contenir que des lettres." required /></label><br></br>
                        <label className='text-xl  mt-5 mb-5'>Entrer votre email: <br></br><input id="email" name="email" type="email" placeholder="nomprenom@gmail.com" required /></label><br></br>
                        <label className='text-xl  mt-5 mb-5'>Entrer votre adresse: <br></br><input id="adresse" name="adresse" type="text" placeholder="(ville,pays)" required /></label><br></br>
                        <label className='text-xl  mt-5 mb-5'>Entrer votre numéro de téléphone : <br></br><input id="tel" name="tel" type="tel" placeholder="06........." required /></label><br></br>
                        <label className='text-xl  mt-5 mb-5'>Entrez votre age: <br></br><input id="age" type="number" name="age" min="18" required /></label><br></br>

                    </fieldset>
                    <fieldset>
                        <label className='text-xl  mt-5 mb-5'>Insérer votre photo de profil: <input id="image" type="file" name="image" /></label><br></br>


                        <label className='text-xl  mt-5 mb-5'>Rédiger une petit paragraphe sur votre objectif professionnel:<br></br>
                            <textarea id="bio" name="bio"  placeholder="Ici, vous parler brièvement de vos objectifs et expériences professionnelles"></textarea><br></br>
                        </label>
                        <label className='text-xl  mt-5 mb-5'>Parler des étapes de votre formation professionnelle:<br></br>
                            <textarea id="formation" name="formation"  placeholder="Exemple: [Diplôme1 (type), ville, année, établissement];[Diplôme2 (type), ville, année, établissement];..."></textarea><br></br>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label className='text-xl  mt-5 mb-5'>Quels langages de programmation maîtrisez-vous ?<br></br>
                            <input id="langages" name="langages" placeholder="Python , C , HTML , ..." /><br></br>
                        </label>
                        <label className='text-xl  mt-5 mb-5'>Quelles sont les langues que vous maîtrisez bien ?<br></br>
                            <input id="langues" name="langues" placeholder="Anglais(avancé) , Français(courant) , Espagnol(courant) , ..." /><br></br>
                        </label>
                        <label className='text-xl  mt-5 mb-5'>Quelles sont les langues que vous maîtrisez bien ?<br></br>
                            <input id="softskills" name="softskills" placeholder="Communication , Travail en équipe , Leadership , ..." /><br></br>
                        </label>
                        <label className='text-xl  mt-5 mb-5'>Ajouter vos loisirs et d'autres informations utiles pour le CV :<br></br>
                            <textarea id="loisirs" name="loisirs"  placeholder="Lecture , Musique , Sports , ... " ></textarea><br></br>
                        </label>
                    </fieldset>
                    <input className='text-xl  mt-5 mb-5' type="submit" value="Valider" />
                </form>
            </div>
        </div >
    )
}