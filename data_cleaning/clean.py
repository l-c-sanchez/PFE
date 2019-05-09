import pandas as pd 


def clean_gender(gender):
    gender = str(gender).lower()
    if 'multi' in gender:
        return 'multi'
    elif gender.startswith('f'):
        return 'f'
    elif gender.startswith('m'):
        return 'm'
    else:
        return 'other'

def clean_game(game):
    return game.replace('†', '')

columns = ['to_keep', 'game', 'platforms', 'editor', 'developer', 'gender', 'type']

dfs = []
for year in [2016, 2017, 2018]:
    df = pd.read_csv(f'games_{year}.tsv', sep='\t')
    # print(df)
    df = df[columns]
    # print(df)
    df['year'] = year
    dfs.append(df)

df = pd.concat(dfs)

# For bubble visualisation
df = df[df['to_keep'] == '1']
df['gender'] = df['gender'].apply(clean_gender)
df['game'] = df['game'].apply(clean_game)

df.to_csv('games.tsv', sep='\t', index=False)

# For searchable table

gender_labels = {
    'f': 'Féminin',
    'm': 'Masculin',
    'multi': 'Multi (personnage masculin et/ou féminin)',
    'other': 'Autres (genre ambigu, personnage non-humain...)'
}
table_df = df
table_df['gender'] = table_df['gender'].apply(lambda x: gender_labels[x])

table_columns = {
    'game': 'Jeu',
    'editor': 'Editeur',
    'developer': 'Studio',
    'gender': 'Personnage principal',
    'year': 'Année'
}
table_df = df[list(table_columns.keys())]
table_df = table_df.rename(columns=table_columns)

table_df.to_json ('games.json', orient='split', index=False)