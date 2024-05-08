"""empty message

Revision ID: 79d5a6c6d833
Revises: 
Create Date: 2024-03-26 19:49:57.783475

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '79d5a6c6d833'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('venue', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('details', sa.String(), nullable=True),
    sa.Column('image_url', sa.String(), nullable=True),
    sa.Column('event_date', sa.String(), nullable=True),
    sa.Column('event_link', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('forum_threads',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('content', sa.String(), nullable=True),
    sa.Column('image_url', sa.String(), nullable=True),
    sa.Column('date_added', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('releases',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('artist', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('record_label', sa.String(), nullable=True),
    sa.Column('date_released', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('buy_link', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('_password_hash', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.Column('avatar', sa.String(), nullable=True),
    sa.Column('city', sa.String(), nullable=True),
    sa.Column('country', sa.String(), nullable=True),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_users_username'), ['username'], unique=True)

    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(), nullable=True),
    sa.Column('date_added', sa.String(), nullable=True),
    sa.Column('release_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['release_id'], ['releases.id'], name=op.f('fk_comments_release_id_releases')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_comments_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('forum_messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('message', sa.String(), nullable=True),
    sa.Column('date_added', sa.String(), nullable=True),
    sa.Column('gif', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('forum_thread_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['forum_thread_id'], ['forum_threads.id'], name=op.f('fk_forum_messages_forum_thread_id_forum_threads')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_forum_messages_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('post_comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(), nullable=True),
    sa.Column('date_added', sa.String(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], name=op.f('fk_post_comments_post_id_posts')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_post_comments_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('saved_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('release_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['release_id'], ['releases.id'], name=op.f('fk_saved_items_release_id_releases')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_saved_items_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tracks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('bpm', sa.Integer(), nullable=True),
    sa.Column('audio', sa.String(), nullable=True),
    sa.Column('artist_names', sa.String(), nullable=True),
    sa.Column('release_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['release_id'], ['releases.id'], name=op.f('fk_tracks_release_id_releases')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tracks')
    op.drop_table('saved_items')
    op.drop_table('post_comments')
    op.drop_table('forum_messages')
    op.drop_table('comments')
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_users_username'))

    op.drop_table('users')
    op.drop_table('releases')
    op.drop_table('posts')
    op.drop_table('forum_threads')
    op.drop_table('events')
    # ### end Alembic commands ###
