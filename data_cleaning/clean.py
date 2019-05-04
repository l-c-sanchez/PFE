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


columns = ['to_keep', 'game', 'platforms', 'editor', 'developer', 'gender', 'type']

dfs = []
for year in [2017, 2018]:
    df = pd.read_csv(f'games_{year}.tsv', sep='\t')
    df = df[columns]
    df['year'] = year
    dfs.append(df)

df = pd.concat(dfs)

df = df[df['to_keep'] == '1']
df['gender'] = df['gender'].apply(clean_gender)
df.to_csv('games.tsv', sep='\t', index=False)
